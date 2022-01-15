/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!**********************************************!*\
  !*** ./js/woocommerce/sticky-add-to-cart.js ***!
  \**********************************************/
  /*global willydevtheme_sticky_add_to_cart_params */
  (function () {
    // eslint-disable-next-line @wordpress/no-global-event-listener
    document.addEventListener('DOMContentLoaded', function () {
      var stickyAddToCart = document.getElementsByClassName(
        'willydevtheme-sticky-add-to-cart',
      );

      if (!stickyAddToCart.length) {
        return;
      } // eslint-disable-next-line camelcase

      if (typeof willydevtheme_sticky_add_to_cart_params === 'undefined') {
        return;
      }

      var trigger = document.getElementsByClassName(
        willydevtheme_sticky_add_to_cart_params.trigger_class,
      );

      if (trigger.length > 0) {
        var stickyAddToCartToggle = function stickyAddToCartToggle() {
          if (
            trigger[0].getBoundingClientRect().top + trigger[0].scrollHeight <
            0
          ) {
            stickyAddToCart[0].classList.add(
              'willydevtheme-sticky-add-to-cart--slideInDown',
            );
            stickyAddToCart[0].classList.remove(
              'willydevtheme-sticky-add-to-cart--slideOutUp',
            );
          } else if (
            stickyAddToCart[0].classList.contains(
              'willydevtheme-sticky-add-to-cart--slideInDown',
            )
          ) {
            stickyAddToCart[0].classList.add(
              'willydevtheme-sticky-add-to-cart--slideOutUp',
            );
            stickyAddToCart[0].classList.remove(
              'willydevtheme-sticky-add-to-cart--slideInDown',
            );
          }
        };

        stickyAddToCartToggle(); // eslint-disable-next-line @wordpress/no-global-event-listener

        window.addEventListener('scroll', function () {
          stickyAddToCartToggle();
        }); // Get product id

        var productId = null;
        document.body.classList.forEach(function (item) {
          if (item.substring(0, 7) === 'postid-') {
            productId = item.replace(/[^0-9]/g, '');
          }
        });

        if (productId) {
          var product = document.getElementById('product-' + productId);

          if (product) {
            if (
              !product.classList.contains('product-type-simple') &&
              !product.classList.contains('product-type-external')
            ) {
              var selectOptions = document.getElementsByClassName(
                'willydevtheme-sticky-add-to-cart__content-button',
              );
              selectOptions[0].addEventListener('click', function (event) {
                event.preventDefault();
                document
                  .getElementById('product-' + productId)
                  .scrollIntoView();
              });
            }
          }
        }
      }
    });
  })();
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FERixDQUNrQixhQUFhUCxTQUQvQixFQUVFVyxjQUZGO0FBR0EsYUFQRDtBQVFBO0FBQ0Q7QUFDRDtBQUNEO0FBQ0QsR0F2RkQ7QUF3RkEsQ0ExRkQsSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3dvb2NvbW1lcmNlL3N0aWNreS1hZGQtdG8tY2FydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBicmFuZGtldGluZ3Nfc3RpY2t5X2FkZF90b19jYXJ0X3BhcmFtcyAqL1xyXG4oIGZ1bmN0aW9uICgpIHtcclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHdvcmRwcmVzcy9uby1nbG9iYWwtZXZlbnQtbGlzdGVuZXJcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHN0aWNreUFkZFRvQ2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcblx0XHRcdCdicmFuZGtldGluZ3Mtc3RpY2t5LWFkZC10by1jYXJ0J1xyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoICEgc3RpY2t5QWRkVG9DYXJ0Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuXHRcdGlmICggdHlwZW9mIGJyYW5ka2V0aW5nc19zdGlja3lfYWRkX3RvX2NhcnRfcGFyYW1zID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG5cdFx0XHRicmFuZGtldGluZ3Nfc3RpY2t5X2FkZF90b19jYXJ0X3BhcmFtcy50cmlnZ2VyX2NsYXNzXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmICggdHJpZ2dlci5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRjb25zdCBzdGlja3lBZGRUb0NhcnRUb2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0dHJpZ2dlclsgMCBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXHJcblx0XHRcdFx0XHRcdHRyaWdnZXJbIDAgXS5zY3JvbGxIZWlnaHQgPFxyXG5cdFx0XHRcdFx0MFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0c3RpY2t5QWRkVG9DYXJ0WyAwIF0uY2xhc3NMaXN0LmFkZChcclxuXHRcdFx0XHRcdFx0J2JyYW5ka2V0aW5ncy1zdGlja3ktYWRkLXRvLWNhcnQtLXNsaWRlSW5Eb3duJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHN0aWNreUFkZFRvQ2FydFsgMCBdLmNsYXNzTGlzdC5yZW1vdmUoXHJcblx0XHRcdFx0XHRcdCdicmFuZGtldGluZ3Mtc3RpY2t5LWFkZC10by1jYXJ0LS1zbGlkZU91dFVwJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0c3RpY2t5QWRkVG9DYXJ0WyAwIF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG5cdFx0XHRcdFx0XHQnYnJhbmRrZXRpbmdzLXN0aWNreS1hZGQtdG8tY2FydC0tc2xpZGVJbkRvd24nXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRzdGlja3lBZGRUb0NhcnRbIDAgXS5jbGFzc0xpc3QuYWRkKFxyXG5cdFx0XHRcdFx0XHQnYnJhbmRrZXRpbmdzLXN0aWNreS1hZGQtdG8tY2FydC0tc2xpZGVPdXRVcCdcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRzdGlja3lBZGRUb0NhcnRbIDAgXS5jbGFzc0xpc3QucmVtb3ZlKFxyXG5cdFx0XHRcdFx0XHQnYnJhbmRrZXRpbmdzLXN0aWNreS1hZGQtdG8tY2FydC0tc2xpZGVJbkRvd24nXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHN0aWNreUFkZFRvQ2FydFRvZ2dsZSgpO1xyXG5cclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tZ2xvYmFsLWV2ZW50LWxpc3RlbmVyXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHN0aWNreUFkZFRvQ2FydFRvZ2dsZSgpO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHQvLyBHZXQgcHJvZHVjdCBpZFxyXG5cdFx0XHRsZXQgcHJvZHVjdElkID0gbnVsbDtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmZvckVhY2goIGZ1bmN0aW9uICggaXRlbSApIHtcclxuXHRcdFx0XHRpZiAoIGl0ZW0uc3Vic3RyaW5nKCAwLCA3ICkgPT09ICdwb3N0aWQtJyApIHtcclxuXHRcdFx0XHRcdHByb2R1Y3RJZCA9IGl0ZW0ucmVwbGFjZSggL1teMC05XS9nLCAnJyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0aWYgKCBwcm9kdWN0SWQgKSB7XHJcblx0XHRcdFx0Y29uc3QgcHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG5cdFx0XHRcdFx0J3Byb2R1Y3QtJyArIHByb2R1Y3RJZFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmICggcHJvZHVjdCApIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0ISBwcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucyggJ3Byb2R1Y3QtdHlwZS1zaW1wbGUnICkgJiZcclxuXHRcdFx0XHRcdFx0ISBwcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucyggJ3Byb2R1Y3QtdHlwZS1leHRlcm5hbCcgKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG5cdFx0XHRcdFx0XHRcdCdicmFuZGtldGluZ3Mtc3RpY2t5LWFkZC10by1jYXJ0X19jb250ZW50LWJ1dHRvbidcclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdHNlbGVjdE9wdGlvbnNbIDAgXS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnRcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldEVsZW1lbnRCeUlkKCAncHJvZHVjdC0nICsgcHJvZHVjdElkIClcclxuXHRcdFx0XHRcdFx0XHRcdC5zY3JvbGxJbnRvVmlldygpO1xyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSApO1xyXG59ICkoKTtcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0aWNreUFkZFRvQ2FydCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJicmFuZGtldGluZ3Nfc3RpY2t5X2FkZF90b19jYXJ0X3BhcmFtcyIsInRyaWdnZXIiLCJ0cmlnZ2VyX2NsYXNzIiwic3RpY2t5QWRkVG9DYXJ0VG9nZ2xlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJ3aW5kb3ciLCJwcm9kdWN0SWQiLCJib2R5IiwiZm9yRWFjaCIsIml0ZW0iLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwicHJvZHVjdCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0T3B0aW9ucyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzY3JvbGxJbnRvVmlldyJdLCJzb3VyY2VSb290IjoiIn0=
