jQuery(document).ready(function ($) {
  //button upload
    $('.custom-media-item-upload').on("click", function() {
      var send_attachment_bkp = wp.media.editor.send.attachment;
      var button = $(this);
  
      wp.media.editor.send.attachment = function(props, attachment) {
        $(button).next().val(attachment.id);
        $(button).next().next().attr('src', attachment.url);
        $(button).next().next().show();
        $(button).next().next().next().show();
  
        wp.media.editor.send.attachment = send_attachment_bkp;
      }
      wp.media.editor.open(button);
  
      return false;       
    });
  //button remove
    $('.custom-media-item-delete').on("click", function() {
      var button = $(this);
  
      $(button).hide();
      $(button).prev().attr('src', '');
      $(button).prev().hide();
      $(button).prev().prev().val('');
  
      return false;       
    });
  });

  //este codigo funciona sobre la siguiente estructura html 
  // <label for="thumbnail_id">Imagen destacada</label>
  //           <div class="custom-media-item">
  //               <a href="#" class="button button-primary custom-media-item-upload">Subir imagen</a>
  //               <input type="hidden" id="thumbnail_id" name="thumbnail_id" value="">
  //               <img src="" alt="" style="max-width:150px;display:none;">
  //               <a href="#" class="button button-primary custom-media-item-delete">Eliminar</a>
  //           </div>

  //y se agrega a traves de este gancho
//js library enqueue media
// add_action( 'admin_print_scripts', 'my_admin_scripts' );

// function my_admin_scripts() {
//     //Agregamos nuestro JS
//     wp_enqueue_script( 'my_custom_fields_js', plugins_url() . '/tematicas-custom-taxonomy/assets/js/custom-fields.js', array('jquery'), true );
  
//     //Añadimos la librería multimedia
//     wp_enqueue_media();
// }