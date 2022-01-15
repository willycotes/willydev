/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!**************************!*\
  !*** ./js/navigation.js ***!
  \**************************/
  /* global willydevthemeScreenReaderText */

  /**
   * navigation.js
   *
   * Handles toggling the navigation menu for small screens.
   * Also adds a focus class to parent li's for accessibility.
   */
  (function () {
    // eslint-disable-next-line @wordpress/no-global-event-listener
    document.addEventListener('DOMContentLoaded', function () {
      var container = document.getElementById('site-navigation');

      if (!container) {
        return;
      }

      var button = container.querySelector('button');

      if (!button) {
        return;
      }

      var menu = container.querySelector('ul'); // Hide menu toggle button if menu is empty and return early.

      if (!menu) {
        button.style.display = 'none';
        return;
      }

      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
      menu.classList.add('nav-menu');
      button.addEventListener('click', function () {
        container.classList.toggle('toggled');
        var expanded = container.classList.contains('toggled')
          ? 'true'
          : 'false';
        button.setAttribute('aria-expanded', expanded);
        menu.setAttribute('aria-expanded', expanded);
      }); // Add dropdown toggle that displays child menu items.

      var handheld = document.getElementsByClassName('handheld-navigation');

      if (handheld.length > 0) {
        [].forEach.call(
          handheld[0].querySelectorAll(
            '.menu-item-has-children > a, .page_item_has_children > a',
          ),
          function (anchor) {
            // Add dropdown toggle that displays child menu items
            var btn = document.createElement('button');
            btn.setAttribute('aria-expanded', 'false');
            btn.classList.add('dropdown-toggle');
            var btnSpan = document.createElement('span');
            btnSpan.classList.add('screen-reader-text');
            btnSpan.appendChild(
              document.createTextNode(willydevthemeScreenReaderText.expand),
            );
            btn.appendChild(btnSpan);
            anchor.parentNode.insertBefore(btn, anchor.nextSibling); // Set the active submenu dropdown toggle button initial state

            if (anchor.parentNode.classList.contains('current-menu-ancestor')) {
              btn.setAttribute('aria-expanded', 'true');
              btn.classList.add('toggled-on');
              btn.nextElementSibling.classList.add('toggled-on');
            } // Add event listener

            btn.addEventListener('click', function () {
              btn.classList.toggle('toggled-on'); // Remove text inside span

              while (btnSpan.firstChild) {
                btnSpan.removeChild(btnSpan.firstChild);
              }

              var expanded = btn.classList.contains('toggled-on');
              btn.setAttribute('aria-expanded', expanded);
              btnSpan.appendChild(
                document.createTextNode(
                  expanded
                    ? willydevthemeScreenReaderText.collapse
                    : willydevthemeScreenReaderText.expand,
                ),
              );
              btn.nextElementSibling.classList.toggle('toggled-on');
            });
          },
        );
      } // Add focus class to parents of sub-menu anchors.

      [].forEach.call(
        document.querySelectorAll(
          '.site-header .menu-item > a, .site-header .page_item > a, .site-header-cart a',
        ),
        function (anchor) {
          anchor.addEventListener('focus', function () {
            // Remove focus class from other sub-menus previously open.
            var elems = document.querySelectorAll('.focus');
            [].forEach.call(elems, function (el) {
              if (!el.contains(anchor)) {
                el.classList.remove('focus'); // Remove blocked class, if it exists.

                if (el.firstChild && el.firstChild.classList) {
                  el.firstChild.classList.remove('blocked');
                }
              }
            }); // Add focus class.

            var li = anchor.parentNode;
            li.classList.add('focus');
          });
        },
      ); // Ensure the dropdowns close when user taps outside the site header

      [].forEach.call(
        document.querySelectorAll('body #page > :not( .site-header )'),
        function (element) {
          element.addEventListener('click', function () {
            [].forEach.call(
              document.querySelectorAll('.focus, .blocked'),
              function (el) {
                el.classList.remove('focus');
                el.classList.remove('blocked');
              },
            );
          });
        },
      ); // Add an identifying class to dropdowns when on a touch device
      // This is required to switch the dropdown hiding method from a negative `left` value to `display: none`.

      if (
        ('ontouchstart' in window || window.navigator.maxTouchPoints) &&
        window.innerWidth > 767
      ) {
        [].forEach.call(
          document.querySelectorAll(
            '.site-header ul ul, .site-header-cart .widget_shopping_cart',
          ),
          function (element) {
            element.classList.add('sub-menu--is-touch-device');
          },
        ); // Add blocked class to links that open sub-menus, and prevent from navigating away on first touch.

        var acceptClick = false;
        [].forEach.call(
          document.querySelectorAll(
            '.site-header .menu-item > a, .site-header .page_item > a, .site-header-cart a',
          ),
          function (anchor) {
            anchor.addEventListener('click', function (event) {
              if (
                anchor.classList.contains('blocked') &&
                acceptClick === false
              ) {
                event.preventDefault();
              }

              acceptClick = false;
            });
            anchor.addEventListener('pointerup', function (event) {
              if (
                anchor.classList.contains('blocked') ||
                event.pointerType === 'mouse'
              ) {
                acceptClick = true;
              } else if (
                (anchor.className === 'cart-contents' &&
                  anchor.parentNode.nextElementSibling &&
                  anchor.parentNode.nextElementSibling.textContent.trim() !==
                    '') ||
                anchor.nextElementSibling
              ) {
                anchor.classList.add('blocked');
              } else {
                acceptClick = true;
              }
            });
          },
        );
      }
    });
  })();
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQURqQixJQUVEWCxNQUFNLENBQUNRLFVBQVAsQ0FBa0JHLGtCQUFsQixDQUFxQ2tCLFdBQXJDLENBQWlEQyxJQUFqRCxPQUNDLEVBSEYsSUFJQTlCLE1BQU0sQ0FBQ1csa0JBTEQsRUFNTDtBQUNEWCxZQUFBQSxNQUFNLENBQUNYLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXNCLFNBQXRCO0FBQ0EsV0FSTSxNQVFBO0FBQ05rQyxZQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNBO0FBQ0QsU0FqQkQ7QUFrQkEsT0FsQ0Y7QUFvQ0E7QUFDRCxHQXJNRDtBQXNNQSxDQXhNRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgYnJhbmRrZXRpbmdzU2NyZWVuUmVhZGVyVGV4dCAqL1xyXG5cclxuLyoqXHJcbiAqIG5hdmlnYXRpb24uanNcclxuICpcclxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zLlxyXG4gKiBBbHNvIGFkZHMgYSBmb2N1cyBjbGFzcyB0byBwYXJlbnQgbGkncyBmb3IgYWNjZXNzaWJpbGl0eS5cclxuICovXHJcbiggZnVuY3Rpb24gKCkge1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLWdsb2JhbC1ldmVudC1saXN0ZW5lclxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdzaXRlLW5hdmlnYXRpb24nICk7XHJcblx0XHRpZiAoICEgY29udGFpbmVyICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoICdidXR0b24nICk7XHJcblxyXG5cdFx0aWYgKCAhIGJ1dHRvbiApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvciggJ3VsJyApO1xyXG5cclxuXHRcdC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cclxuXHRcdGlmICggISBtZW51ICkge1xyXG5cdFx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xyXG5cdFx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xyXG5cdFx0bWVudS5jbGFzc0xpc3QuYWRkKCAnbmF2LW1lbnUnICk7XHJcblxyXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoICd0b2dnbGVkJyApO1xyXG5cdFx0XHRjb25zdCBleHBhbmRlZCA9IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoICd0b2dnbGVkJyApXHJcblx0XHRcdFx0PyAndHJ1ZSdcclxuXHRcdFx0XHQ6ICdmYWxzZSc7XHJcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQgKTtcclxuXHRcdFx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHQvLyBBZGQgZHJvcGRvd24gdG9nZ2xlIHRoYXQgZGlzcGxheXMgY2hpbGQgbWVudSBpdGVtcy5cclxuXHRcdGNvbnN0IGhhbmRoZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuXHRcdFx0J2hhbmRoZWxkLW5hdmlnYXRpb24nXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmICggaGFuZGhlbGQubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0W10uZm9yRWFjaC5jYWxsKFxyXG5cdFx0XHRcdGhhbmRoZWxkWyAwIF0ucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0XHRcdCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuID4gYSdcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdGZ1bmN0aW9uICggYW5jaG9yICkge1xyXG5cdFx0XHRcdFx0Ly8gQWRkIGRyb3Bkb3duIHRvZ2dsZSB0aGF0IGRpc3BsYXlzIGNoaWxkIG1lbnUgaXRlbXNcclxuXHRcdFx0XHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdidXR0b24nICk7XHJcblx0XHRcdFx0XHRidG4uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCAnZHJvcGRvd24tdG9nZ2xlJyApO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcclxuXHRcdFx0XHRcdGJ0blNwYW4uY2xhc3NMaXN0LmFkZCggJ3NjcmVlbi1yZWFkZXItdGV4dCcgKTtcclxuXHRcdFx0XHRcdGJ0blNwYW4uYXBwZW5kQ2hpbGQoXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxyXG5cdFx0XHRcdFx0XHRcdGJyYW5ka2V0aW5nc1NjcmVlblJlYWRlclRleHQuZXhwYW5kXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YnRuLmFwcGVuZENoaWxkKCBidG5TcGFuICk7XHJcblxyXG5cdFx0XHRcdFx0YW5jaG9yLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBidG4sIGFuY2hvci5uZXh0U2libGluZyApO1xyXG5cclxuXHRcdFx0XHRcdC8vIFNldCB0aGUgYWN0aXZlIHN1Ym1lbnUgZHJvcGRvd24gdG9nZ2xlIGJ1dHRvbiBpbml0aWFsIHN0YXRlXHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdGFuY2hvci5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcclxuXHRcdFx0XHRcdFx0XHQnY3VycmVudC1tZW51LWFuY2VzdG9yJ1xyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0YnRuLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcclxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoICd0b2dnbGVkLW9uJyApO1xyXG5cdFx0XHRcdFx0XHRidG4ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoICd0b2dnbGVkLW9uJyApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoICd0b2dnbGVkLW9uJyApO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIHRleHQgaW5zaWRlIHNwYW5cclxuXHRcdFx0XHRcdFx0d2hpbGUgKCBidG5TcGFuLmZpcnN0Q2hpbGQgKSB7XHJcblx0XHRcdFx0XHRcdFx0YnRuU3Bhbi5yZW1vdmVDaGlsZCggYnRuU3Bhbi5maXJzdENoaWxkICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGV4cGFuZGVkID0gYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ3RvZ2dsZWQtb24nICk7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGV4cGFuZGVkICk7XHJcblx0XHRcdFx0XHRcdGJ0blNwYW4uYXBwZW5kQ2hpbGQoXHJcblx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXHJcblx0XHRcdFx0XHRcdFx0XHRleHBhbmRlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IGJyYW5ka2V0aW5nc1NjcmVlblJlYWRlclRleHQuY29sbGFwc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0OiBicmFuZGtldGluZ3NTY3JlZW5SZWFkZXJUZXh0LmV4cGFuZFxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0YnRuLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCAndG9nZ2xlZC1vbicgKTtcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQWRkIGZvY3VzIGNsYXNzIHRvIHBhcmVudHMgb2Ygc3ViLW1lbnUgYW5jaG9ycy5cclxuXHRcdFtdLmZvckVhY2guY2FsbChcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0XHQnLnNpdGUtaGVhZGVyIC5tZW51LWl0ZW0gPiBhLCAuc2l0ZS1oZWFkZXIgLnBhZ2VfaXRlbSA+IGEsIC5zaXRlLWhlYWRlci1jYXJ0IGEnXHJcblx0XHRcdCksXHJcblx0XHRcdGZ1bmN0aW9uICggYW5jaG9yICkge1xyXG5cdFx0XHRcdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQvLyBSZW1vdmUgZm9jdXMgY2xhc3MgZnJvbSBvdGhlciBzdWItbWVudXMgcHJldmlvdXNseSBvcGVuLlxyXG5cdFx0XHRcdFx0Y29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmZvY3VzJyApO1xyXG5cclxuXHRcdFx0XHRcdFtdLmZvckVhY2guY2FsbCggZWxlbXMsIGZ1bmN0aW9uICggZWwgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggISBlbC5jb250YWlucyggYW5jaG9yICkgKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBSZW1vdmUgYmxvY2tlZCBjbGFzcywgaWYgaXQgZXhpc3RzLlxyXG5cdFx0XHRcdFx0XHRcdGlmICggZWwuZmlyc3RDaGlsZCAmJiBlbC5maXJzdENoaWxkLmNsYXNzTGlzdCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSggJ2Jsb2NrZWQnICk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQWRkIGZvY3VzIGNsYXNzLlxyXG5cdFx0XHRcdFx0Y29uc3QgbGkgPSBhbmNob3IucGFyZW50Tm9kZTtcclxuXHJcblx0XHRcdFx0XHRsaS5jbGFzc0xpc3QuYWRkKCAnZm9jdXMnICk7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIEVuc3VyZSB0aGUgZHJvcGRvd25zIGNsb3NlIHdoZW4gdXNlciB0YXBzIG91dHNpZGUgdGhlIHNpdGUgaGVhZGVyXHJcblx0XHRbXS5mb3JFYWNoLmNhbGwoXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdib2R5ICNwYWdlID4gOm5vdCggLnNpdGUtaGVhZGVyICknICksXHJcblx0XHRcdGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuXHRcdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFtdLmZvckVhY2guY2FsbChcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mb2N1cywgLmJsb2NrZWQnICksXHJcblx0XHRcdFx0XHRcdGZ1bmN0aW9uICggZWwgKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xyXG5cdFx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoICdibG9ja2VkJyApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHQvLyBBZGQgYW4gaWRlbnRpZnlpbmcgY2xhc3MgdG8gZHJvcGRvd25zIHdoZW4gb24gYSB0b3VjaCBkZXZpY2VcclxuXHRcdC8vIFRoaXMgaXMgcmVxdWlyZWQgdG8gc3dpdGNoIHRoZSBkcm9wZG93biBoaWRpbmcgbWV0aG9kIGZyb20gYSBuZWdhdGl2ZSBgbGVmdGAgdmFsdWUgdG8gYGRpc3BsYXk6IG5vbmVgLlxyXG5cdFx0aWYgKFxyXG5cdFx0XHQoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzICkgJiZcclxuXHRcdFx0d2luZG93LmlubmVyV2lkdGggPiA3NjdcclxuXHRcdCkge1xyXG5cdFx0XHRbXS5mb3JFYWNoLmNhbGwoXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0XHRcdCcuc2l0ZS1oZWFkZXIgdWwgdWwsIC5zaXRlLWhlYWRlci1jYXJ0IC53aWRnZXRfc2hvcHBpbmdfY2FydCdcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3N1Yi1tZW51LS1pcy10b3VjaC1kZXZpY2UnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Ly8gQWRkIGJsb2NrZWQgY2xhc3MgdG8gbGlua3MgdGhhdCBvcGVuIHN1Yi1tZW51cywgYW5kIHByZXZlbnQgZnJvbSBuYXZpZ2F0aW5nIGF3YXkgb24gZmlyc3QgdG91Y2guXHJcblx0XHRcdGxldCBhY2NlcHRDbGljayA9IGZhbHNlO1xyXG5cclxuXHRcdFx0W10uZm9yRWFjaC5jYWxsKFxyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdFx0XHQnLnNpdGUtaGVhZGVyIC5tZW51LWl0ZW0gPiBhLCAuc2l0ZS1oZWFkZXIgLnBhZ2VfaXRlbSA+IGEsIC5zaXRlLWhlYWRlci1jYXJ0IGEnXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHRmdW5jdGlvbiAoIGFuY2hvciApIHtcclxuXHRcdFx0XHRcdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0YW5jaG9yLmNsYXNzTGlzdC5jb250YWlucyggJ2Jsb2NrZWQnICkgJiZcclxuXHRcdFx0XHRcdFx0XHRhY2NlcHRDbGljayA9PT0gZmFsc2VcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0YWNjZXB0Q2xpY2sgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblx0XHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0XHRhbmNob3IuY2xhc3NMaXN0LmNvbnRhaW5zKCAnYmxvY2tlZCcgKSB8fFxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGFjY2VwdENsaWNrID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0XHQoIGFuY2hvci5jbGFzc05hbWUgPT09ICdjYXJ0LWNvbnRlbnRzJyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0YW5jaG9yLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nICYmXHJcblx0XHRcdFx0XHRcdFx0XHRhbmNob3IucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQudHJpbSgpICE9PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnJyApIHx8XHJcblx0XHRcdFx0XHRcdFx0YW5jaG9yLm5leHRFbGVtZW50U2libGluZ1xyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRhbmNob3IuY2xhc3NMaXN0LmFkZCggJ2Jsb2NrZWQnICk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0YWNjZXB0Q2xpY2sgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxufSApKCk7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZXhwYW5kZWQiLCJjb250YWlucyIsImhhbmRoZWxkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImZvckVhY2giLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImFuY2hvciIsImJ0biIsImNyZWF0ZUVsZW1lbnQiLCJidG5TcGFuIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImJyYW5ka2V0aW5nc1NjcmVlblJlYWRlclRleHQiLCJleHBhbmQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjb2xsYXBzZSIsImVsZW1zIiwiZWwiLCJyZW1vdmUiLCJsaSIsImVsZW1lbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsImlubmVyV2lkdGgiLCJhY2NlcHRDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb2ludGVyVHlwZSIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=
