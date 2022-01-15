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
    });

    // Dismiss notice inside theme page.
    $(document).on('click', '.sf-nux-dismiss-button', function () {
      dismissNux();
      $('.willydevtheme-intro-setup').hide();
      $('.willydevtheme-intro-message').fadeIn('slow');
    });
  });
})(window.wp, jQuery);
