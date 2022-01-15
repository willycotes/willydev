/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!**********************************!*\
  !*** ./js/woocommerce/footer.js ***!
  \**********************************/
  /**
   * footer.js
   *
   * Adds a class required to reveal the search in the handheld footer bar.
   * Also hides the handheld footer bar when an input is focused.
   */
  (function () {
    // Wait for DOM to be ready.
    // eslint-disable-next-line @wordpress/no-global-event-listener
    document.addEventListener('DOMContentLoaded', function () {
      if (
        document.getElementsByClassName('willydevtheme-handheld-footer-bar')
          .length === 0
      ) {
        return;
      } // Add class to footer search when clicked.

      [].forEach.call(
        document.querySelectorAll(
          '.willydevtheme-handheld-footer-bar .search > a',
        ),
        function (anchor) {
          anchor.addEventListener('click', function (event) {
            anchor.parentElement.classList.toggle('active');
            event.preventDefault();
          });
        },
      ); // Add focus class to body when an input field is focused.
      // This is used to hide the Handheld Footer Bar when an input is focused.

      var footerBar = document.getElementsByClassName(
        'willydevtheme-handheld-footer-bar',
      );
      var forms = document.forms;

      var isFocused = function isFocused(focused) {
        return function (event) {
          if (!!focused && event.target.tabIndex !== -1) {
            document.body.classList.add('sf-input-focused');
          } else {
            document.body.classList.remove('sf-input-focused');
          }
        };
      };

      if (footerBar.length && forms.length) {
        for (var i = 0; i < forms.length; i++) {
          if (footerBar[0].contains(forms[i])) {
            continue;
          }

          forms[i].addEventListener('focus', isFocused(true), true);
          forms[i].addEventListener('blur', isFocused(false), true);
        }
      }
    });
  })();
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvd29vY29tbWVyY2UvZm9vdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBRSxZQUFZO0FBQ2I7QUFDQTtBQUNBQSxFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTJCLGtCQUEzQixFQUErQyxZQUFZO0FBQzFELFFBQ0NELFFBQVEsQ0FBQ0Usc0JBQVQsQ0FBaUMsa0NBQWpDLEVBQ0VDLE1BREYsS0FDYSxDQUZkLEVBR0U7QUFDRDtBQUNBLEtBTnlELENBUTFEOzs7QUFDQSxPQUFHQyxPQUFILENBQVdDLElBQVgsQ0FDQ0wsUUFBUSxDQUFDTSxnQkFBVCxDQUNDLCtDQURELENBREQsRUFJQyxVQUFXQyxNQUFYLEVBQW9CO0FBQ25CQSxNQUFBQSxNQUFNLENBQUNOLGdCQUFQLENBQXlCLE9BQXpCLEVBQWtDLFVBQVdPLEtBQVgsRUFBbUI7QUFDcERELFFBQUFBLE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQkMsU0FBckIsQ0FBK0JDLE1BQS9CLENBQXVDLFFBQXZDO0FBQ0FILFFBQUFBLEtBQUssQ0FBQ0ksY0FBTjtBQUNBLE9BSEQ7QUFJQSxLQVRGLEVBVDBELENBcUIxRDtBQUNBOztBQUNBLFFBQU1DLFNBQVMsR0FBR2IsUUFBUSxDQUFDRSxzQkFBVCxDQUNqQixrQ0FEaUIsQ0FBbEI7QUFHQSxRQUFNWSxLQUFLLEdBQUdkLFFBQVEsQ0FBQ2MsS0FBdkI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBV0MsT0FBWCxFQUFxQjtBQUN0QyxhQUFPLFVBQVdSLEtBQVgsRUFBbUI7QUFDekIsWUFBSyxDQUFDLENBQUVRLE9BQUgsSUFBY1IsS0FBSyxDQUFDUyxNQUFOLENBQWFDLFFBQWIsS0FBMEIsQ0FBQyxDQUE5QyxFQUFrRDtBQUNqRGxCLFVBQUFBLFFBQVEsQ0FBQ21CLElBQVQsQ0FBY1QsU0FBZCxDQUF3QlUsR0FBeEIsQ0FBNkIsa0JBQTdCO0FBQ0EsU0FGRCxNQUVPO0FBQ05wQixVQUFBQSxRQUFRLENBQUNtQixJQUFULENBQWNULFNBQWQsQ0FBd0JXLE1BQXhCLENBQWdDLGtCQUFoQztBQUNBO0FBQ0QsT0FORDtBQU9BLEtBUkQ7O0FBVUEsUUFBS1IsU0FBUyxDQUFDVixNQUFWLElBQW9CVyxLQUFLLENBQUNYLE1BQS9CLEVBQXdDO0FBQ3ZDLFdBQU0sSUFBSW1CLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUdSLEtBQUssQ0FBQ1gsTUFBM0IsRUFBbUNtQixDQUFDLEVBQXBDLEVBQXlDO0FBQ3hDLFlBQUtULFNBQVMsQ0FBRSxDQUFGLENBQVQsQ0FBZVUsUUFBZixDQUF5QlQsS0FBSyxDQUFFUSxDQUFGLENBQTlCLENBQUwsRUFBNkM7QUFDNUM7QUFDQTs7QUFFRFIsUUFBQUEsS0FBSyxDQUFFUSxDQUFGLENBQUwsQ0FBV3JCLGdCQUFYLENBQTZCLE9BQTdCLEVBQXNDYyxTQUFTLENBQUUsSUFBRixDQUEvQyxFQUF5RCxJQUF6RDtBQUNBRCxRQUFBQSxLQUFLLENBQUVRLENBQUYsQ0FBTCxDQUFXckIsZ0JBQVgsQ0FBNkIsTUFBN0IsRUFBcUNjLFNBQVMsQ0FBRSxLQUFGLENBQTlDLEVBQXlELElBQXpEO0FBQ0E7QUFDRDtBQUNELEdBL0NEO0FBZ0RBLENBbkRELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy93b29jb21tZXJjZS9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGZvb3Rlci5qc1xyXG4gKlxyXG4gKiBBZGRzIGEgY2xhc3MgcmVxdWlyZWQgdG8gcmV2ZWFsIHRoZSBzZWFyY2ggaW4gdGhlIGhhbmRoZWxkIGZvb3RlciBiYXIuXHJcbiAqIEFsc28gaGlkZXMgdGhlIGhhbmRoZWxkIGZvb3RlciBiYXIgd2hlbiBhbiBpbnB1dCBpcyBmb2N1c2VkLlxyXG4gKi9cclxuKCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gV2FpdCBmb3IgRE9NIHRvIGJlIHJlYWR5LlxyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLWdsb2JhbC1ldmVudC1saXN0ZW5lclxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAnYnJhbmRrZXRpbmdzLWhhbmRoZWxkLWZvb3Rlci1iYXInIClcclxuXHRcdFx0XHQubGVuZ3RoID09PSAwXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFkZCBjbGFzcyB0byBmb290ZXIgc2VhcmNoIHdoZW4gY2xpY2tlZC5cclxuXHRcdFtdLmZvckVhY2guY2FsbChcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0XHQnLmJyYW5ka2V0aW5ncy1oYW5kaGVsZC1mb290ZXItYmFyIC5zZWFyY2ggPiBhJ1xyXG5cdFx0XHQpLFxyXG5cdFx0XHRmdW5jdGlvbiAoIGFuY2hvciApIHtcclxuXHRcdFx0XHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRcdFx0XHRcdGFuY2hvci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoICdhY3RpdmUnICk7XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHQvLyBBZGQgZm9jdXMgY2xhc3MgdG8gYm9keSB3aGVuIGFuIGlucHV0IGZpZWxkIGlzIGZvY3VzZWQuXHJcblx0XHQvLyBUaGlzIGlzIHVzZWQgdG8gaGlkZSB0aGUgSGFuZGhlbGQgRm9vdGVyIEJhciB3aGVuIGFuIGlucHV0IGlzIGZvY3VzZWQuXHJcblx0XHRjb25zdCBmb290ZXJCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG5cdFx0XHQnYnJhbmRrZXRpbmdzLWhhbmRoZWxkLWZvb3Rlci1iYXInXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgZm9ybXMgPSBkb2N1bWVudC5mb3JtcztcclxuXHRcdGNvbnN0IGlzRm9jdXNlZCA9IGZ1bmN0aW9uICggZm9jdXNlZCApIHtcclxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblx0XHRcdFx0aWYgKCAhISBmb2N1c2VkICYmIGV2ZW50LnRhcmdldC50YWJJbmRleCAhPT0gLTEgKSB7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoICdzZi1pbnB1dC1mb2N1c2VkJyApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdzZi1pbnB1dC1mb2N1c2VkJyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCBmb290ZXJCYXIubGVuZ3RoICYmIGZvcm1zLmxlbmd0aCApIHtcclxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZm9ybXMubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0aWYgKCBmb290ZXJCYXJbIDAgXS5jb250YWlucyggZm9ybXNbIGkgXSApICkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmb3Jtc1sgaSBdLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1cycsIGlzRm9jdXNlZCggdHJ1ZSApLCB0cnVlICk7XHJcblx0XHRcdFx0Zm9ybXNbIGkgXS5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsIGlzRm9jdXNlZCggZmFsc2UgKSwgdHJ1ZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSApO1xyXG59ICkoKTtcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmNob3IiLCJldmVudCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsImZvb3RlckJhciIsImZvcm1zIiwiaXNGb2N1c2VkIiwiZm9jdXNlZCIsInRhcmdldCIsInRhYkluZGV4IiwiYm9keSIsImFkZCIsInJlbW92ZSIsImkiLCJjb250YWlucyJdLCJzb3VyY2VSb290IjoiIn0=
