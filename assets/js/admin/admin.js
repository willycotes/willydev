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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWRtaW4vYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLENBQUMsVUFBVUEsRUFBVixFQUFjQyxDQUFkLEVBQWlCO0FBQ2hCOztBQUVBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTO0FBQ1A7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU0UsVUFBVCxHQUFzQjtBQUNwQkQsSUFBQUEsQ0FBQyxDQUFDRSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFQyxPQUZBO0FBR0xDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxLQUFLLEVBQUVDLGdCQUFnQixDQUFDRCxLQURwQjtBQUVKRSxRQUFBQSxNQUFNLEVBQUU7QUFGSixPQUhEO0FBT0xDLE1BQUFBLFFBQVEsRUFBRTtBQVBMLEtBQVA7QUFTRDs7QUFFRFYsRUFBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDWjtBQUNBQSxJQUFBQSxDQUFDLENBQUNXLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixnQ0FBeEIsRUFBMEQsWUFBWTtBQUNwRVgsTUFBQUEsVUFBVTtBQUNYLEtBRkQsRUFGWSxDQU1aOztBQUNBRCxJQUFBQSxDQUFDLENBQUNXLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3Qix3QkFBeEIsRUFBa0QsWUFBWTtBQUM1RFgsTUFBQUEsVUFBVTtBQUNWRCxNQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2EsSUFBaEM7QUFDQWIsTUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NjLE1BQWxDLENBQXlDLE1BQXpDO0FBQ0QsS0FKRDtBQUtELEdBWkEsQ0FBRDtBQWFELENBbkNELEVBbUNHQyxNQUFNLENBQUNoQixFQW5DVixFQW1DY2lCLE1BbkNkLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hZG1pbi9hZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgYWpheHVybCwgd2lsbHlkZXZ0aGVtZU5VWCAqL1xuKGZ1bmN0aW9uICh3cCwgJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKCF3cCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qXG4gICAqIEFqYXggcmVxdWVzdCB0aGF0IHdpbGwgaGlkZSB0aGUgd2lsbHlkZXZ0aGVtZSBOVVggYWRtaW4gbm90aWNlIG9yIG1lc3NhZ2UuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNtaXNzTnV4KCkge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6IGFqYXh1cmwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5vbmNlOiB3aWxseWRldnRoZW1lTlVYLm5vbmNlLFxuICAgICAgICBhY3Rpb246ICd3aWxseWRldnRoZW1lX2Rpc21pc3Nfbm90aWNlJyxcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIH0pO1xuICB9XG5cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRGlzbWlzcyBub3RpY2VcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNmLW5vdGljZS1udXggLm5vdGljZS1kaXNtaXNzJywgZnVuY3Rpb24gKCkge1xuICAgICAgZGlzbWlzc051eCgpO1xuICAgIH0pO1xuXG4gICAgLy8gRGlzbWlzcyBub3RpY2UgaW5zaWRlIHRoZW1lIHBhZ2UuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZi1udXgtZGlzbWlzcy1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNtaXNzTnV4KCk7XG4gICAgICAkKCcud2lsbHlkZXZ0aGVtZS1pbnRyby1zZXR1cCcpLmhpZGUoKTtcbiAgICAgICQoJy53aWxseWRldnRoZW1lLWludHJvLW1lc3NhZ2UnKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgICB9KTtcbiAgfSk7XG59KSh3aW5kb3cud3AsIGpRdWVyeSk7XG4iXSwibmFtZXMiOlsid3AiLCIkIiwiZGlzbWlzc051eCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiYWpheHVybCIsImRhdGEiLCJub25jZSIsIndpbGx5ZGV2dGhlbWVOVVgiLCJhY3Rpb24iLCJkYXRhVHlwZSIsImRvY3VtZW50Iiwib24iLCJoaWRlIiwiZmFkZUluIiwid2luZG93IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==