<?php
/**
 * Hooks willydevtheme and woocommerce
 */

remove_action( 'willydevtheme_main_top', 'willydevtheme_breadcrumb', 10 );
remove_action( 'willydevtheme_archive_main_top', 'willydevtheme_breadcrumb', 10 );
remove_action( 'willydevtheme_homepage_main_top', 'willydevtheme_breadcrumb', 10 );
remove_action( 'willydevtheme_single_post_loop_before', 'willydevtheme_breadcrumb', 10 );
remove_action( 'willydevtheme_page_loop_before', 'willydevtheme_breadcrumb', 10 );
add_action( 'willydevtheme_main_top', 'willydevtheme_woocommerce_breadcrumb', 10 );
add_action( 'willydevtheme_archive_main_top', 'willydevtheme_woocommerce_breadcrumb', 10 );
add_action( 'willydevtheme_homepage_main_top', 'willydevtheme_woocommerce_breadcrumb', 10 );
add_action( 'willydevtheme_single_post_loop_before', 'willydevtheme_woocommerce_breadcrumb', 10 );
add_action( 'willydevtheme_page_loop_before', 'willydevtheme_woocommerce_breadcrumb', 10 );