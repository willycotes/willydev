/******/ (() => { // webpackBootstrap
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
        action: 'willydevtheme_dismiss_notice'
      },
      dataType: 'json'
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWRtaW4vYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLENBQUMsVUFBVUEsRUFBVixFQUFjQyxDQUFkLEVBQWlCO0FBQ2hCOztBQUVBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTO0FBQ1A7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU0UsVUFBVCxHQUFzQjtBQUNwQkQsSUFBQUEsQ0FBQyxDQUFDRSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFQyxPQUZBO0FBR0xDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxLQUFLLEVBQUVDLGdCQUFnQixDQUFDRCxLQURwQjtBQUVKRSxRQUFBQSxNQUFNLEVBQUU7QUFGSixPQUhEO0FBT0xDLE1BQUFBLFFBQVEsRUFBRTtBQVBMLEtBQVA7QUFTRDs7QUFFRFYsRUFBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDWjtBQUNBQSxJQUFBQSxDQUFDLENBQUNXLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixnQ0FBeEIsRUFBMEQsWUFBWTtBQUNwRVgsTUFBQUEsVUFBVTtBQUNYLEtBRkQsRUFGWSxDQU1aOztBQUNBRCxJQUFBQSxDQUFDLENBQUNXLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3Qix3QkFBeEIsRUFBa0QsWUFBWTtBQUM1RFgsTUFBQUEsVUFBVTtBQUNWRCxNQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2EsSUFBaEM7QUFDQWIsTUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NjLE1BQWxDLENBQXlDLE1BQXpDO0FBQ0QsS0FKRDtBQUtELEdBWkEsQ0FBRDtBQWFELENBbkNELEVBbUNHQyxNQUFNLENBQUNoQixFQW5DVixFQW1DY2lCLE1BbkNkLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hZG1pbi9hZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgYWpheHVybCwgd2lsbHlkZXZ0aGVtZU5VWCAqL1xyXG4oZnVuY3Rpb24gKHdwLCAkKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBpZiAoIXdwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIEFqYXggcmVxdWVzdCB0aGF0IHdpbGwgaGlkZSB0aGUgd2lsbHlkZXZ0aGVtZSBOVVggYWRtaW4gbm90aWNlIG9yIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZGlzbWlzc051eCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiBhamF4dXJsLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbm9uY2U6IHdpbGx5ZGV2dGhlbWVOVVgubm9uY2UsXHJcbiAgICAgICAgYWN0aW9uOiAnd2lsbHlkZXZ0aGVtZV9kaXNtaXNzX25vdGljZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRGlzbWlzcyBub3RpY2VcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2Ytbm90aWNlLW51eCAubm90aWNlLWRpc21pc3MnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRpc21pc3NOdXgoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERpc21pc3Mgbm90aWNlIGluc2lkZSB0aGVtZSBwYWdlLlxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZi1udXgtZGlzbWlzcy1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRpc21pc3NOdXgoKTtcclxuICAgICAgJCgnLndpbGx5ZGV2dGhlbWUtaW50cm8tc2V0dXAnKS5oaWRlKCk7XHJcbiAgICAgICQoJy53aWxseWRldnRoZW1lLWludHJvLW1lc3NhZ2UnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KSh3aW5kb3cud3AsIGpRdWVyeSk7XHJcbiJdLCJuYW1lcyI6WyJ3cCIsIiQiLCJkaXNtaXNzTnV4IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJhamF4dXJsIiwiZGF0YSIsIm5vbmNlIiwid2lsbHlkZXZ0aGVtZU5VWCIsImFjdGlvbiIsImRhdGFUeXBlIiwiZG9jdW1lbnQiLCJvbiIsImhpZGUiLCJmYWRlSW4iLCJ3aW5kb3ciLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9