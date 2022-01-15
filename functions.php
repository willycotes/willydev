<?php
/**
 * willydevtheme engine room.
 *
 * @package willydevtheme
 */

/**
 * Assign the willydevtheme version to a var
 */
$theme              = wp_get_theme( 'willydevtheme' );
$willydevtheme_version = $theme['Version'];

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 980; /* pixels */
}

/**
 * Creating Object theme config
 */
$willydevtheme = (object) array(
	'version'    => $willydevtheme_version,

	/**
	 * Initialize all the things.
	 */
	'main'       => require 'inc/class-willydevtheme.php',
	'customizer' => require 'inc/customizer/class-willydevtheme-customizer.php',
);

require 'inc/willydevtheme-functions.php';
require 'inc/willydevtheme-template-hooks.php';
require 'inc/willydevtheme-template-functions.php';
require 'inc/wordpress-shims.php';

if ( class_exists( 'Jetpack' ) ) {
	$willydevtheme->jetpack = require 'inc/jetpack/class-willydevtheme-jetpack.php';
}

if ( willydevtheme_is_woocommerce_activated() ) {
	$willydevtheme->woocommerce            = require 'inc/woocommerce/class-willydevtheme-woocommerce.php';
	$willydevtheme->woocommerce_customizer = require 'inc/woocommerce/class-willydevtheme-woocommerce-customizer.php';

	require 'inc/woocommerce/class-willydevtheme-woocommerce-adjacent-products.php';

	require 'inc/woocommerce/willydevtheme-woocommerce-template-hooks.php';
	require 'inc/woocommerce/willydevtheme-woocommerce-template-functions.php';
	require 'inc/woocommerce/willydevtheme-woocommerce-functions.php';
}

if ( is_admin() ) {
	$willydevtheme->admin = require 'inc/admin/class-willydevtheme-admin.php';

	require 'inc/admin/class-willydevtheme-plugin-install.php';
}

/**
 * NUX
 * Only load if wp version is 4.7.3 or above because of this issue;
 * https://core.trac.wordpress.org/ticket/39610?cversion=1&cnum_hist=2
 */
if ( version_compare( get_bloginfo( 'version' ), '4.7.3', '>=' ) && ( is_admin() || is_customize_preview() ) ) {
	require 'inc/nux/class-willydevtheme-nux-admin.php';
	require 'inc/nux/class-willydevtheme-nux-guided-tour.php';
	require 'inc/nux/class-willydevtheme-nux-starter-content.php';
}

/**
 * Note: Do not add any custom code here. Please use a custom plugin so that your customizations aren't lost during updates.
 * https://github.com/woocommerce/theme-customisations
 */

 /**
	* desactivate emojis
  */
	/**
 * Disable the emoji's
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
 }
 add_action( 'init', 'disable_emojis' );
 
 /**
	* Filter function used to remove the tinymce emoji plugin.
	* 
	* @param array $plugins 
	* @return array Difference betwen the two arrays
	*/
 function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
	return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
	return array();
	}
 }
 
 /**
	* Remove emoji CDN hostname from DNS prefetching hints.
	*
	* @param array $urls URLs to print for resource hints.
	* @param string $relation_type The relation type the URLs are printed for.
	* @return array Difference betwen the two arrays.
	*/
 function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' == $relation_type ) {
	/** This filter is documented in wp-includes/formatting.php */
	$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
 
 $urls = array_diff( $urls, array( $emoji_svg_url ) );
	}
 
 return $urls;
 }