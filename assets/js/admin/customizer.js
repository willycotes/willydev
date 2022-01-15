/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!********************************!*\
  !*** ./js/admin/customizer.js ***!
  \********************************/
  /* global _wpCustomizeSFGuidedTourSteps */
  (function (wp, $) {
    'use strict';

    if (!wp || !wp.customize) {
      return;
    } // Set up our namespace.

    var api = wp.customize;
    api.SFGuidedTourSteps = [];

    if (typeof _wpCustomizeSFGuidedTourSteps !== 'undefined') {
      $.extend(api.SFGuidedTourSteps, _wpCustomizeSFGuidedTourSteps);
    }
    /**
     * wp.customize.SFGuidedTour
     *
     */

    api.SFGuidedTour = {
      $container: null,
      currentStep: -1,
      init: function init() {
        this._setupUI();
      },
      _setupUI: function _setupUI() {
        var self = this,
          $wpCustomize = $('body.wp-customizer .wp-full-overlay');
        this.$container = $('<div/>').addClass('sf-guided-tour'); // Add guided tour div

        $wpCustomize.prepend(this.$container); // Add listeners

        this._addListeners(); // Initial position

        this.$container
          .css(
            !$('body').hasClass('rtl') ? 'left' : 'right',
            $('#customize-controls').width() + 10 + 'px',
          )
          .on('transitionend', function () {
            self.$container.addClass('sf-loaded');
          }); // Show first step

        this._showNextStep();

        $(document).on(
          'click',
          '.sf-guided-tour-step .sf-nux-button',
          function () {
            self._showNextStep();

            return false;
          },
        );
        $(document).on(
          'click',
          '.sf-guided-tour-step .sf-guided-tour-skip',
          function () {
            if (self.currentStep === 0) {
              self._hideTour(true);
            } else {
              self._showNextStep();
            }

            return false;
          },
        );
      },
      _addListeners: function _addListeners() {
        var self = this;
        api.state('expandedSection').bind(function () {
          self._adjustPosition();
        });
        api.state('expandedPanel').bind(function () {
          self._adjustPosition();
        });
      },
      _adjustPosition: function _adjustPosition() {
        var step = this._getCurrentStep();

        if (!step) {
          return;
        }

        this.$container.removeClass('sf-inside-section');
        var expandedSection = api.state('expandedSection').get();
        var expandedPanel = api.state('expandedPanel').get();

        if (expandedSection && step.section === expandedSection.id) {
          this._moveContainer(
            $(expandedSection.container[1]).find('.customize-section-title'),
          );

          this.$container.addClass('sf-inside-section');
        } else if (expandedSection === false && expandedPanel === false) {
          if (this._isTourHidden()) {
            this._revealTour();
          } else {
            var selector = this._getSelector(step.section);

            this._moveContainer(selector);
          }
        } else {
          this._hideTour();
        }
      },
      _hideTour: function _hideTour(remove) {
        var self = this; // Already hidden?

        if (this._isTourHidden()) {
          return;
        }

        var containerOffset = this.$container.offset();
        this.$container.css({
          transform: '',
          top: containerOffset.top,
        });
        $('body')
          .addClass('sf-exiting')
          .on(
            'animationend.willydevtheme webkitAnimationEnd.willydevtheme',
            function () {
              $(this)
                .removeClass('sf-exiting')
                .off(
                  'animationend.willydevtheme webkitAnimationEnd.willydevtheme',
                )
                .addClass('sf-hidden');
              self.$container.hide();

              if (typeof remove !== 'undefined' && remove === true) {
                self._removeTour();
              }
            },
          );
      },
      _revealTour: function _revealTour() {
        var self = this;
        $('body').removeClass('sf-hidden');
        self.$container.show();
        var containerOffset = this.$container.offset();
        var offsetTop = parseInt(containerOffset.top, 10);
        $('body')
          .addClass('sf-entering')
          .on(
            'animationend.willydevtheme webkitAnimationEnd.willydevtheme',
            function () {
              $(this)
                .removeClass('sf-entering')
                .off(
                  'animationend.willydevtheme webkitAnimationEnd.willydevtheme',
                );
              self.$container.css({
                top: 'auto',
                transform: 'translateY(' + offsetTop + 'px)',
              });
            },
          );
      },
      _removeTour: function _removeTour() {
        this.$container.remove();
      },
      _closeAllSections: function _closeAllSections() {
        api.section.each(function (section) {
          section.collapse({
            duration: 0,
          });
        });
        api.panel.each(function (panel) {
          panel.collapse({
            duration: 0,
          });
        });
      },
      _showNextStep: function _showNextStep() {
        if (this._isLastStep()) {
          this._hideTour(true);

          return;
        }

        this._closeAllSections(); // Get next step

        var step = this._getNextStep(); // Convert line breaks to paragraphs

        step.message = this._lineBreaksToParagraphs(step.message); // Load template

        var template = wp.template('sf-guided-tour-step');
        this.$container.removeClass('sf-first-step');

        if (this.currentStep === 0) {
          step.first_step = true;
          this.$container.addClass('sf-first-step');
        }

        if (this._isLastStep()) {
          step.last_step = true;
          this.$container.addClass('sf-last-step');
        }

        this._moveContainer(this._getSelector(step.section));

        this.$container.html(template(step));
      },
      _moveContainer: function _moveContainer($selector) {
        var self = this;

        if (!$selector) {
          return;
        }

        var position =
          parseInt($selector.offset().top, 10) + $selector.height() / 2 - 44;
        this.$container
          .addClass('sf-moving')
          .css({
            transform: 'translateY(' + position + 'px)',
          })
          .on('transitionend.willydevtheme', function () {
            self.$container.removeClass('sf-moving');
            self.$container.off('transitionend.willydevtheme');
          });
      },
      _getSelector: function _getSelector(pointTo) {
        var sectionOrPanel = api.section(pointTo)
          ? api.section(pointTo)
          : api.panel(pointTo); // Check whether this is a section, panel, or a regular selector

        if (typeof sectionOrPanel !== 'undefined') {
          return $(sectionOrPanel.container[0]);
        }

        return $(pointTo);
      },
      _getCurrentStep: function _getCurrentStep() {
        return api.SFGuidedTourSteps[this.currentStep];
      },
      _getNextStep: function _getNextStep() {
        this.currentStep = this.currentStep + 1;
        return api.SFGuidedTourSteps[this.currentStep];
      },
      _isTourHidden: function _isTourHidden() {
        return $('body').hasClass('sf-hidden') ? true : false;
      },
      _isLastStep: function _isLastStep() {
        return this.currentStep + 1 < api.SFGuidedTourSteps.length
          ? false
          : true;
      },
      _lineBreaksToParagraphs: function _lineBreaksToParagraphs(message) {
        return '<p>' + message.replace('\n\n', '</p><p>') + '</p>';
      },
    };
    $(document).ready(function () {
      api.SFGuidedTour.init();
    });
  })(window.wp, jQuery);
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThRbEJWLElBQUFBLHVCQTlRa0IsbUNBOFFPRCxPQTlRUCxFQThRaUI7QUFDbEMsYUFBTyxRQUFRQSxPQUFPLENBQUNZLE9BQVIsQ0FBaUIsTUFBakIsRUFBeUIsU0FBekIsQ0FBUixHQUErQyxNQUF0RDtBQUNBO0FBaFJpQixHQUFuQjtBQW1SQXZFLEVBQUFBLENBQUMsQ0FBRXFCLFFBQUYsQ0FBRCxDQUFjbUQsS0FBZCxDQUFxQixZQUFZO0FBQ2hDdEUsSUFBQUEsR0FBRyxDQUFDSSxZQUFKLENBQWlCRyxJQUFqQjtBQUNBLEdBRkQ7QUFHQSxDQTFTRCxFQTBTS2dFLE1BQU0sQ0FBQzFFLEVBMVNaLEVBMFNnQjJFLE1BMVNoQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYWRtaW4vY3VzdG9taXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgX3dwQ3VzdG9taXplU0ZHdWlkZWRUb3VyU3RlcHMgKi9cclxuKCBmdW5jdGlvbiAoIHdwLCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAhIHdwIHx8ICEgd3AuY3VzdG9taXplICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Ly8gU2V0IHVwIG91ciBuYW1lc3BhY2UuXHJcblx0Y29uc3QgYXBpID0gd3AuY3VzdG9taXplO1xyXG5cclxuXHRhcGkuU0ZHdWlkZWRUb3VyU3RlcHMgPSBbXTtcclxuXHJcblx0aWYgKCB0eXBlb2YgX3dwQ3VzdG9taXplU0ZHdWlkZWRUb3VyU3RlcHMgIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0JC5leHRlbmQoIGFwaS5TRkd1aWRlZFRvdXJTdGVwcywgX3dwQ3VzdG9taXplU0ZHdWlkZWRUb3VyU3RlcHMgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHdwLmN1c3RvbWl6ZS5TRkd1aWRlZFRvdXJcclxuXHQgKlxyXG5cdCAqL1xyXG5cdGFwaS5TRkd1aWRlZFRvdXIgPSB7XHJcblx0XHQkY29udGFpbmVyOiBudWxsLFxyXG5cdFx0Y3VycmVudFN0ZXA6IC0xLFxyXG5cclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdHRoaXMuX3NldHVwVUkoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X3NldHVwVUkoKSB7XHJcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdCR3cEN1c3RvbWl6ZSA9ICQoICdib2R5LndwLWN1c3RvbWl6ZXIgLndwLWZ1bGwtb3ZlcmxheScgKTtcclxuXHJcblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoICc8ZGl2Lz4nICkuYWRkQ2xhc3MoICdzZi1ndWlkZWQtdG91cicgKTtcclxuXHJcblx0XHRcdC8vIEFkZCBndWlkZWQgdG91ciBkaXZcclxuXHRcdFx0JHdwQ3VzdG9taXplLnByZXBlbmQoIHRoaXMuJGNvbnRhaW5lciApO1xyXG5cclxuXHRcdFx0Ly8gQWRkIGxpc3RlbmVyc1xyXG5cdFx0XHR0aGlzLl9hZGRMaXN0ZW5lcnMoKTtcclxuXHJcblx0XHRcdC8vIEluaXRpYWwgcG9zaXRpb25cclxuXHRcdFx0dGhpcy4kY29udGFpbmVyXHJcblx0XHRcdFx0LmNzcyhcclxuXHRcdFx0XHRcdCEgJCggJ2JvZHknICkuaGFzQ2xhc3MoICdydGwnICkgPyAnbGVmdCcgOiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0JCggJyNjdXN0b21pemUtY29udHJvbHMnICkud2lkdGgoKSArIDEwICsgJ3B4J1xyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQub24oICd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0c2VsZi4kY29udGFpbmVyLmFkZENsYXNzKCAnc2YtbG9hZGVkJyApO1xyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdC8vIFNob3cgZmlyc3Qgc3RlcFxyXG5cdFx0XHR0aGlzLl9zaG93TmV4dFN0ZXAoKTtcclxuXHJcblx0XHRcdCQoIGRvY3VtZW50ICkub24oXHJcblx0XHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0XHQnLnNmLWd1aWRlZC10b3VyLXN0ZXAgLnNmLW51eC1idXR0b24nLFxyXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHNlbGYuX3Nob3dOZXh0U3RlcCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdCQoIGRvY3VtZW50ICkub24oXHJcblx0XHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0XHQnLnNmLWd1aWRlZC10b3VyLXN0ZXAgLnNmLWd1aWRlZC10b3VyLXNraXAnLFxyXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGlmICggc2VsZi5jdXJyZW50U3RlcCA9PT0gMCApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5faGlkZVRvdXIoIHRydWUgKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuX3Nob3dOZXh0U3RlcCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9hZGRMaXN0ZW5lcnMoKSB7XHJcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0YXBpLnN0YXRlKCAnZXhwYW5kZWRTZWN0aW9uJyApLmJpbmQoIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzZWxmLl9hZGp1c3RQb3NpdGlvbigpO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRhcGkuc3RhdGUoICdleHBhbmRlZFBhbmVsJyApLmJpbmQoIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzZWxmLl9hZGp1c3RQb3NpdGlvbigpO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9hZGp1c3RQb3NpdGlvbigpIHtcclxuXHRcdFx0Y29uc3Qgc3RlcCA9IHRoaXMuX2dldEN1cnJlbnRTdGVwKCk7XHJcblxyXG5cdFx0XHRpZiAoICEgc3RlcCApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyggJ3NmLWluc2lkZS1zZWN0aW9uJyApO1xyXG5cclxuXHRcdFx0Y29uc3QgZXhwYW5kZWRTZWN0aW9uID0gYXBpLnN0YXRlKCAnZXhwYW5kZWRTZWN0aW9uJyApLmdldCgpO1xyXG5cdFx0XHRjb25zdCBleHBhbmRlZFBhbmVsID0gYXBpLnN0YXRlKCAnZXhwYW5kZWRQYW5lbCcgKS5nZXQoKTtcclxuXHJcblx0XHRcdGlmICggZXhwYW5kZWRTZWN0aW9uICYmIHN0ZXAuc2VjdGlvbiA9PT0gZXhwYW5kZWRTZWN0aW9uLmlkICkge1xyXG5cdFx0XHRcdHRoaXMuX21vdmVDb250YWluZXIoXHJcblx0XHRcdFx0XHQkKCBleHBhbmRlZFNlY3Rpb24uY29udGFpbmVyWyAxIF0gKS5maW5kKFxyXG5cdFx0XHRcdFx0XHQnLmN1c3RvbWl6ZS1zZWN0aW9uLXRpdGxlJ1xyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLmFkZENsYXNzKCAnc2YtaW5zaWRlLXNlY3Rpb24nICk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIGV4cGFuZGVkU2VjdGlvbiA9PT0gZmFsc2UgJiYgZXhwYW5kZWRQYW5lbCA9PT0gZmFsc2UgKSB7XHJcblx0XHRcdFx0aWYgKCB0aGlzLl9pc1RvdXJIaWRkZW4oKSApIHtcclxuXHRcdFx0XHRcdHRoaXMuX3JldmVhbFRvdXIoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0b3IgPSB0aGlzLl9nZXRTZWxlY3Rvciggc3RlcC5zZWN0aW9uICk7XHJcblx0XHRcdFx0XHR0aGlzLl9tb3ZlQ29udGFpbmVyKCBzZWxlY3RvciApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9oaWRlVG91cigpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9oaWRlVG91ciggcmVtb3ZlICkge1xyXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdC8vIEFscmVhZHkgaGlkZGVuP1xyXG5cdFx0XHRpZiAoIHRoaXMuX2lzVG91ckhpZGRlbigpICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgY29udGFpbmVyT2Zmc2V0ID0gdGhpcy4kY29udGFpbmVyLm9mZnNldCgpO1xyXG5cclxuXHRcdFx0dGhpcy4kY29udGFpbmVyLmNzcygge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogJycsXHJcblx0XHRcdFx0dG9wOiBjb250YWluZXJPZmZzZXQudG9wLFxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHQkKCAnYm9keScgKVxyXG5cdFx0XHRcdC5hZGRDbGFzcyggJ3NmLWV4aXRpbmcnIClcclxuXHRcdFx0XHQub24oXHJcblx0XHRcdFx0XHQnYW5pbWF0aW9uZW5kLmJyYW5ka2V0aW5ncyB3ZWJraXRBbmltYXRpb25FbmQuYnJhbmRrZXRpbmdzJyxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCggdGhpcyApXHJcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnc2YtZXhpdGluZycgKVxyXG5cdFx0XHRcdFx0XHRcdC5vZmYoXHJcblx0XHRcdFx0XHRcdFx0XHQnYW5pbWF0aW9uZW5kLmJyYW5ka2V0aW5ncyB3ZWJraXRBbmltYXRpb25FbmQuYnJhbmRrZXRpbmdzJ1xyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoICdzZi1oaWRkZW4nICk7XHJcblx0XHRcdFx0XHRcdHNlbGYuJGNvbnRhaW5lci5oaWRlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0dHlwZW9mIHJlbW92ZSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuXHRcdFx0XHRcdFx0XHRyZW1vdmUgPT09IHRydWVcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5fcmVtb3ZlVG91cigpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X3JldmVhbFRvdXIoKSB7XHJcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0JCggJ2JvZHknICkucmVtb3ZlQ2xhc3MoICdzZi1oaWRkZW4nICk7XHJcblxyXG5cdFx0XHRzZWxmLiRjb250YWluZXIuc2hvdygpO1xyXG5cclxuXHRcdFx0Y29uc3QgY29udGFpbmVyT2Zmc2V0ID0gdGhpcy4kY29udGFpbmVyLm9mZnNldCgpO1xyXG5cdFx0XHRjb25zdCBvZmZzZXRUb3AgPSBwYXJzZUludCggY29udGFpbmVyT2Zmc2V0LnRvcCwgMTAgKTtcclxuXHJcblx0XHRcdCQoICdib2R5JyApXHJcblx0XHRcdFx0LmFkZENsYXNzKCAnc2YtZW50ZXJpbmcnIClcclxuXHRcdFx0XHQub24oXHJcblx0XHRcdFx0XHQnYW5pbWF0aW9uZW5kLmJyYW5ka2V0aW5ncyB3ZWJraXRBbmltYXRpb25FbmQuYnJhbmRrZXRpbmdzJyxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCggdGhpcyApXHJcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnc2YtZW50ZXJpbmcnIClcclxuXHRcdFx0XHRcdFx0XHQub2ZmKFxyXG5cdFx0XHRcdFx0XHRcdFx0J2FuaW1hdGlvbmVuZC5icmFuZGtldGluZ3Mgd2Via2l0QW5pbWF0aW9uRW5kLmJyYW5ka2V0aW5ncydcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0c2VsZi4kY29udGFpbmVyLmNzcygge1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoJyArIG9mZnNldFRvcCArICdweCknLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X3JlbW92ZVRvdXIoKSB7XHJcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZW1vdmUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2Nsb3NlQWxsU2VjdGlvbnMoKSB7XHJcblx0XHRcdGFwaS5zZWN0aW9uLmVhY2goIGZ1bmN0aW9uICggc2VjdGlvbiApIHtcclxuXHRcdFx0XHRzZWN0aW9uLmNvbGxhcHNlKCB7IGR1cmF0aW9uOiAwIH0gKTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0YXBpLnBhbmVsLmVhY2goIGZ1bmN0aW9uICggcGFuZWwgKSB7XHJcblx0XHRcdFx0cGFuZWwuY29sbGFwc2UoIHsgZHVyYXRpb246IDAgfSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9zaG93TmV4dFN0ZXAoKSB7XHJcblx0XHRcdGlmICggdGhpcy5faXNMYXN0U3RlcCgpICkge1xyXG5cdFx0XHRcdHRoaXMuX2hpZGVUb3VyKCB0cnVlICk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9jbG9zZUFsbFNlY3Rpb25zKCk7XHJcblxyXG5cdFx0XHQvLyBHZXQgbmV4dCBzdGVwXHJcblx0XHRcdGNvbnN0IHN0ZXAgPSB0aGlzLl9nZXROZXh0U3RlcCgpO1xyXG5cclxuXHRcdFx0Ly8gQ29udmVydCBsaW5lIGJyZWFrcyB0byBwYXJhZ3JhcGhzXHJcblx0XHRcdHN0ZXAubWVzc2FnZSA9IHRoaXMuX2xpbmVCcmVha3NUb1BhcmFncmFwaHMoIHN0ZXAubWVzc2FnZSApO1xyXG5cclxuXHRcdFx0Ly8gTG9hZCB0ZW1wbGF0ZVxyXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IHdwLnRlbXBsYXRlKCAnc2YtZ3VpZGVkLXRvdXItc3RlcCcgKTtcclxuXHJcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyggJ3NmLWZpcnN0LXN0ZXAnICk7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuY3VycmVudFN0ZXAgPT09IDAgKSB7XHJcblx0XHRcdFx0c3RlcC5maXJzdF9zdGVwID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoICdzZi1maXJzdC1zdGVwJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuX2lzTGFzdFN0ZXAoKSApIHtcclxuXHRcdFx0XHRzdGVwLmxhc3Rfc3RlcCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLmFkZENsYXNzKCAnc2YtbGFzdC1zdGVwJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9tb3ZlQ29udGFpbmVyKCB0aGlzLl9nZXRTZWxlY3Rvciggc3RlcC5zZWN0aW9uICkgKTtcclxuXHJcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5odG1sKCB0ZW1wbGF0ZSggc3RlcCApICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9tb3ZlQ29udGFpbmVyKCAkc2VsZWN0b3IgKSB7XHJcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0aWYgKCAhICRzZWxlY3RvciApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHBvc2l0aW9uID1cclxuXHRcdFx0XHRwYXJzZUludCggJHNlbGVjdG9yLm9mZnNldCgpLnRvcCwgMTAgKSArXHJcblx0XHRcdFx0JHNlbGVjdG9yLmhlaWdodCgpIC8gMiAtXHJcblx0XHRcdFx0NDQ7XHJcblxyXG5cdFx0XHR0aGlzLiRjb250YWluZXJcclxuXHRcdFx0XHQuYWRkQ2xhc3MoICdzZi1tb3ZpbmcnIClcclxuXHRcdFx0XHQuY3NzKCB7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyBwb3NpdGlvbiArICdweCknLFxyXG5cdFx0XHRcdH0gKVxyXG5cdFx0XHRcdC5vbiggJ3RyYW5zaXRpb25lbmQuYnJhbmRrZXRpbmdzJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0c2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCAnc2YtbW92aW5nJyApO1xyXG5cdFx0XHRcdFx0c2VsZi4kY29udGFpbmVyLm9mZiggJ3RyYW5zaXRpb25lbmQuYnJhbmRrZXRpbmdzJyApO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2dldFNlbGVjdG9yKCBwb2ludFRvICkge1xyXG5cdFx0XHRjb25zdCBzZWN0aW9uT3JQYW5lbCA9IGFwaS5zZWN0aW9uKCBwb2ludFRvIClcclxuXHRcdFx0XHQ/IGFwaS5zZWN0aW9uKCBwb2ludFRvIClcclxuXHRcdFx0XHQ6IGFwaS5wYW5lbCggcG9pbnRUbyApO1xyXG5cclxuXHRcdFx0Ly8gQ2hlY2sgd2hldGhlciB0aGlzIGlzIGEgc2VjdGlvbiwgcGFuZWwsIG9yIGEgcmVndWxhciBzZWxlY3RvclxyXG5cdFx0XHRpZiAoIHR5cGVvZiBzZWN0aW9uT3JQYW5lbCAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0cmV0dXJuICQoIHNlY3Rpb25PclBhbmVsLmNvbnRhaW5lclsgMCBdICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiAkKCBwb2ludFRvICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9nZXRDdXJyZW50U3RlcCgpIHtcclxuXHRcdFx0cmV0dXJuIGFwaS5TRkd1aWRlZFRvdXJTdGVwc1sgdGhpcy5jdXJyZW50U3RlcCBdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfZ2V0TmV4dFN0ZXAoKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwICsgMTtcclxuXHRcdFx0cmV0dXJuIGFwaS5TRkd1aWRlZFRvdXJTdGVwc1sgdGhpcy5jdXJyZW50U3RlcCBdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfaXNUb3VySGlkZGVuKCkge1xyXG5cdFx0XHRyZXR1cm4gJCggJ2JvZHknICkuaGFzQ2xhc3MoICdzZi1oaWRkZW4nICkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9pc0xhc3RTdGVwKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50U3RlcCArIDEgPCBhcGkuU0ZHdWlkZWRUb3VyU3RlcHMubGVuZ3RoXHJcblx0XHRcdFx0PyBmYWxzZVxyXG5cdFx0XHRcdDogdHJ1ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2xpbmVCcmVha3NUb1BhcmFncmFwaHMoIG1lc3NhZ2UgKSB7XHJcblx0XHRcdHJldHVybiAnPHA+JyArIG1lc3NhZ2UucmVwbGFjZSggJ1xcblxcbicsICc8L3A+PHA+JyApICsgJzwvcD4nO1xyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHQkKCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbiAoKSB7XHJcblx0XHRhcGkuU0ZHdWlkZWRUb3VyLmluaXQoKTtcclxuXHR9ICk7XHJcbn0gKSggd2luZG93LndwLCBqUXVlcnkgKTtcclxuIl0sIm5hbWVzIjpbIndwIiwiJCIsImN1c3RvbWl6ZSIsImFwaSIsIlNGR3VpZGVkVG91clN0ZXBzIiwiX3dwQ3VzdG9taXplU0ZHdWlkZWRUb3VyU3RlcHMiLCJleHRlbmQiLCJTRkd1aWRlZFRvdXIiLCIkY29udGFpbmVyIiwiY3VycmVudFN0ZXAiLCJpbml0IiwiX3NldHVwVUkiLCJzZWxmIiwiJHdwQ3VzdG9taXplIiwiYWRkQ2xhc3MiLCJwcmVwZW5kIiwiX2FkZExpc3RlbmVycyIsImNzcyIsImhhc0NsYXNzIiwid2lkdGgiLCJvbiIsIl9zaG93TmV4dFN0ZXAiLCJkb2N1bWVudCIsIl9oaWRlVG91ciIsInN0YXRlIiwiYmluZCIsIl9hZGp1c3RQb3NpdGlvbiIsInN0ZXAiLCJfZ2V0Q3VycmVudFN0ZXAiLCJyZW1vdmVDbGFzcyIsImV4cGFuZGVkU2VjdGlvbiIsImdldCIsImV4cGFuZGVkUGFuZWwiLCJzZWN0aW9uIiwiaWQiLCJfbW92ZUNvbnRhaW5lciIsImNvbnRhaW5lciIsImZpbmQiLCJfaXNUb3VySGlkZGVuIiwiX3JldmVhbFRvdXIiLCJzZWxlY3RvciIsIl9nZXRTZWxlY3RvciIsInJlbW92ZSIsImNvbnRhaW5lck9mZnNldCIsIm9mZnNldCIsInRyYW5zZm9ybSIsInRvcCIsIm9mZiIsImhpZGUiLCJfcmVtb3ZlVG91ciIsInNob3ciLCJvZmZzZXRUb3AiLCJwYXJzZUludCIsIl9jbG9zZUFsbFNlY3Rpb25zIiwiZWFjaCIsImNvbGxhcHNlIiwiZHVyYXRpb24iLCJwYW5lbCIsIl9pc0xhc3RTdGVwIiwiX2dldE5leHRTdGVwIiwibWVzc2FnZSIsIl9saW5lQnJlYWtzVG9QYXJhZ3JhcGhzIiwidGVtcGxhdGUiLCJmaXJzdF9zdGVwIiwibGFzdF9zdGVwIiwiaHRtbCIsIiRzZWxlY3RvciIsInBvc2l0aW9uIiwiaGVpZ2h0IiwicG9pbnRUbyIsInNlY3Rpb25PclBhbmVsIiwibGVuZ3RoIiwicmVwbGFjZSIsInJlYWR5Iiwid2luZG93IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
