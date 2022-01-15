/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!***************************!*\
  !*** ./js/admin/admin.js ***!
  \***************************/
  /* global ajaxurl, willydevthemeNUX */
  (function (wp, $) {
    'use strict';

    if (!wp) {
      return;
    }
    /*
     * Ajax request that will hide the willydevtheme NUX admin notice or message.
     */

    function dismissNux() {
      $.ajax({
        type: 'POST',
        url: ajaxurl,
        data: {
          nonce: willydevthemeNUX.nonce,
          action: 'willydevtheme_dismiss_notice',
        },
        dataType: 'json',
      });
    }

    $(function () {
      // Dismiss notice
      $(document).on('click', '.sf-notice-nux .notice-dismiss', function () {
        dismissNux();
      }); // Dismiss notice inside theme page.

      $(document).on('click', '.sf-nux-dismiss-button', function () {
        dismissNux();
        $('.willydevtheme-intro-setup').hide();
        $('.willydevtheme-intro-message').fadeIn('slow');
      });
    });
  })(window.wp, jQuery);
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWRtaW4vYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLENBQUUsVUFBV0EsRUFBWCxFQUFlQyxDQUFmLEVBQW1CO0FBQ3BCOztBQUVBLE1BQUssQ0FBRUQsRUFBUCxFQUFZO0FBQ1g7QUFDQTtBQUVEO0FBQ0Q7QUFDQTs7O0FBQ0MsV0FBU0UsVUFBVCxHQUFzQjtBQUNyQkQsSUFBQUEsQ0FBQyxDQUFDRSxJQUFGLENBQVE7QUFDUEMsTUFBQUEsSUFBSSxFQUFFLE1BREM7QUFFUEMsTUFBQUEsR0FBRyxFQUFFQyxPQUZFO0FBR1BDLE1BQUFBLElBQUksRUFBRTtBQUNMQyxRQUFBQSxLQUFLLEVBQUVDLGVBQWUsQ0FBQ0QsS0FEbEI7QUFFTEUsUUFBQUEsTUFBTSxFQUFFO0FBRkgsT0FIQztBQU9QQyxNQUFBQSxRQUFRLEVBQUU7QUFQSCxLQUFSO0FBU0E7O0FBRURWLEVBQUFBLENBQUMsQ0FBRSxZQUFZO0FBQ2Q7QUFDQUEsSUFBQUEsQ0FBQyxDQUFFVyxRQUFGLENBQUQsQ0FBY0MsRUFBZCxDQUNDLE9BREQsRUFFQyxnQ0FGRCxFQUdDLFlBQVk7QUFDWFgsTUFBQUEsVUFBVTtBQUNWLEtBTEYsRUFGYyxDQVVkOztBQUNBRCxJQUFBQSxDQUFDLENBQUVXLFFBQUYsQ0FBRCxDQUFjQyxFQUFkLENBQWtCLE9BQWxCLEVBQTJCLHdCQUEzQixFQUFxRCxZQUFZO0FBQ2hFWCxNQUFBQSxVQUFVO0FBQ1ZELE1BQUFBLENBQUMsQ0FBRSwyQkFBRixDQUFELENBQWlDYSxJQUFqQztBQUNBYixNQUFBQSxDQUFDLENBQUUsNkJBQUYsQ0FBRCxDQUFtQ2MsTUFBbkMsQ0FBMkMsTUFBM0M7QUFDQSxLQUpEO0FBS0EsR0FoQkEsQ0FBRDtBQWlCQSxDQXZDRCxFQXVDS0MsTUFBTSxDQUFDaEIsRUF2Q1osRUF1Q2dCaUIsTUF2Q2hCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hZG1pbi9hZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgYWpheHVybCwgYnJhbmRrZXRpbmdzTlVYICovXHJcbiggZnVuY3Rpb24gKCB3cCwgJCApIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggISB3cCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8qXHJcblx0ICogQWpheCByZXF1ZXN0IHRoYXQgd2lsbCBoaWRlIHRoZSBicmFuZGtldGluZ3MgTlVYIGFkbWluIG5vdGljZSBvciBtZXNzYWdlLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGRpc21pc3NOdXgoKSB7XHJcblx0XHQkLmFqYXgoIHtcclxuXHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHR1cmw6IGFqYXh1cmwsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRub25jZTogYnJhbmRrZXRpbmdzTlVYLm5vbmNlLFxyXG5cdFx0XHRcdGFjdGlvbjogJ2JyYW5ka2V0aW5nc19kaXNtaXNzX25vdGljZScsXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHQkKCBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBEaXNtaXNzIG5vdGljZVxyXG5cdFx0JCggZG9jdW1lbnQgKS5vbihcclxuXHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0Jy5zZi1ub3RpY2UtbnV4IC5ub3RpY2UtZGlzbWlzcycsXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRkaXNtaXNzTnV4KCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gRGlzbWlzcyBub3RpY2UgaW5zaWRlIHRoZW1lIHBhZ2UuXHJcblx0XHQkKCBkb2N1bWVudCApLm9uKCAnY2xpY2snLCAnLnNmLW51eC1kaXNtaXNzLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzbWlzc051eCgpO1xyXG5cdFx0XHQkKCAnLmJyYW5ka2V0aW5ncy1pbnRyby1zZXR1cCcgKS5oaWRlKCk7XHJcblx0XHRcdCQoICcuYnJhbmRrZXRpbmdzLWludHJvLW1lc3NhZ2UnICkuZmFkZUluKCAnc2xvdycgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKSggd2luZG93LndwLCBqUXVlcnkgKTtcclxuIl0sIm5hbWVzIjpbIndwIiwiJCIsImRpc21pc3NOdXgiLCJhamF4IiwidHlwZSIsInVybCIsImFqYXh1cmwiLCJkYXRhIiwibm9uY2UiLCJicmFuZGtldGluZ3NOVVgiLCJhY3Rpb24iLCJkYXRhVHlwZSIsImRvY3VtZW50Iiwib24iLCJoaWRlIiwiZmFkZUluIiwid2luZG93IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
