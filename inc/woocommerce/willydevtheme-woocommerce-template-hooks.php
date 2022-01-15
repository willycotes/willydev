<?php
/**
 * willydevtheme WooCommerce hooks
 *
 * @package willydevtheme
 */

/**
 * Homepage
 *
 * @see  willydevtheme_product_categories()
 * @see  willydevtheme_recent_products()
 * @see  willydevtheme_featured_products()
 * @see  willydevtheme_popular_products()
 * @see  willydevtheme_on_sale_products()
 * @see  willydevtheme_best_selling_products()
 */
add_action( 'homepage', 'willydevtheme_product_categories', 20 );
add_action( 'homepage', 'willydevtheme_recent_products', 30 );
add_action( 'homepage', 'willydevtheme_featured_products', 40 );
add_action( 'homepage', 'willydevtheme_popular_products', 50 );
add_action( 'homepage', 'willydevtheme_on_sale_products', 60 );
add_action( 'homepage', 'willydevtheme_best_selling_products', 70 );

/**
 * Layout
 *
 * @see  willydevtheme_before_content()
 * @see  willydevtheme_after_content()
 * @see  woocommerce_breadcrumb()
 * @see  willydevtheme_shop_messages()
 */
remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
remove_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 10 );
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
add_action( 'woocommerce_before_main_content', 'willydevtheme_before_content', 10 );
add_action( 'woocommerce_after_main_content', 'willydevtheme_after_content', 10 );
add_action( 'willydevtheme_content_top', 'willydevtheme_shop_messages', 15 );
add_action( 'willydevtheme_before_content', 'woocommerce_breadcrumb', 10 );

add_action( 'woocommerce_after_shop_loop', 'willydevtheme_sorting_wrapper', 9 );
add_action( 'woocommerce_after_shop_loop', 'woocommerce_catalog_ordering', 10 );
add_action( 'woocommerce_after_shop_loop', 'woocommerce_result_count', 20 );
add_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 30 );
add_action( 'woocommerce_after_shop_loop', 'willydevtheme_sorting_wrapper_close', 31 );

add_action( 'woocommerce_before_shop_loop', 'willydevtheme_sorting_wrapper', 9 );
add_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 10 );
add_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
add_action( 'woocommerce_before_shop_loop', 'willydevtheme_woocommerce_pagination', 30 );
add_action( 'woocommerce_before_shop_loop', 'willydevtheme_sorting_wrapper_close', 31 );

add_action( 'willydevtheme_footer', 'willydevtheme_handheld_footer_bar', 999 );

/**
 * Products
 *
 * @see willydevtheme_edit_post_link()
 * @see willydevtheme_upsell_display()
 * @see willydevtheme_single_product_pagination()
 * @see willydevtheme_sticky_single_add_to_cart()
 */
add_action( 'woocommerce_single_product_summary', 'willydevtheme_edit_post_link', 60 );

remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
add_action( 'woocommerce_after_single_product_summary', 'willydevtheme_upsell_display', 15 );

remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 6 );

add_action( 'woocommerce_after_single_product_summary', 'willydevtheme_single_product_pagination', 30 );
add_action( 'willydevtheme_after_footer', 'willydevtheme_sticky_single_add_to_cart', 999 );

/**
 * Header
 *
 * @see willydevtheme_product_search()
 * @see willydevtheme_header_cart()
 */
add_action( 'willydevtheme_header', 'willydevtheme_product_search', 40 );
add_action( 'willydevtheme_header', 'willydevtheme_header_cart', 60 );

/**
 * Cart fragment
 *
 * @see willydevtheme_cart_link_fragment()
 */
add_filter( 'woocommerce_add_to_cart_fragments', 'willydevtheme_cart_link_fragment' );

/**
 * Integrations
 *
 * @see willydevtheme_woocommerce_brands_archive()
 * @see willydevtheme_woocommerce_brands_single()
 * @see willydevtheme_woocommerce_brands_homepage_section()
 */
if ( class_exists( 'WC_Brands' ) ) {
	add_action( 'woocommerce_archive_description', 'willydevtheme_woocommerce_brands_archive', 5 );
	add_action( 'woocommerce_single_product_summary', 'willydevtheme_woocommerce_brands_single', 4 );
	add_action( 'homepage', 'willydevtheme_woocommerce_brands_homepage_section', 80 );
}
