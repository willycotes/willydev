(function() {
    //remove icon link delete custom product
    let linkCartMini =  document.querySelectorAll('li.woocommerce-mini-cart-item.mini_cart_item a');
             linkCartMini.forEach( link => {
                if (link.dataset.product_id == 8863) {
                     link.style.display = 'none';
                 }
             } );
    jQuery (  function ( $ )  { 
        //remove icon link delete custom product ajax event
        $( document ).ajaxComplete(function() {
    
    let linkCartMini =  document.querySelectorAll('li.woocommerce-mini-cart-item.mini_cart_item a');
                 linkCartMini.forEach( link => {
                    if (link.dataset.product_id == 8863) {
                         link.style.display = 'none';
                     }
                 } );
                });
            });    
} )();