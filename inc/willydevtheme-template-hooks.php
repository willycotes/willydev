<?php
/**
 * willydevtheme hooks
 *
 * @package willydevtheme
 */

/**
 * General
 *
 * @see  willydevtheme_header_widget_region()
 */
add_action( 'willydevtheme_before_content', 'willydevtheme_header_widget_region', 10 );

/**
 * Footer
 *
 * @see  willydevtheme_footer_widgets()
 * @see  willydevtheme_credit()
 */
add_action( 'willydevtheme_footer', 'willydevtheme_footer_widgets', 10 );
add_action( 'willydevtheme_footer', 'willydevtheme_credit', 20 );

/**
 * Homepage blog
 *
 * @see  willydevtheme_homepage_header()
 * @see  willydevtheme_homepage_content()
 * @see  willydevtheme_paging_nav()
 */
add_action( 'willydevtheme_homepage_loop_before', 'willydevtheme_homepage_header', 10 );

add_action( 'willydevtheme_homepage_loop_after', 'willydevtheme_paging_nav', 10 );
add_action( 'willydevtheme_homepage_loop_after', 'willydevtheme_homepage_content', 10 );

/**
 * Posts default
 * 
 * @source /index.php
 * @source /loop.php
 * @source /template-parts/content/content.php
 *
 * @see  willydevtheme_post_header()
 * @see  willydevtheme_post_meta()
 * @see  willydevtheme_post_content()
 * @see  willydevtheme_paging_nav()
 * @see  willydevtheme_single_post_header()
 * @see  willydevtheme_post_nav()
 * @see  willydevtheme_display_comments()
 */
add_action( 'willydevtheme_post_loop', 'willydevtheme_post_header', 10 );
add_action( 'willydevtheme_post_loop', 'willydevtheme_post_content', 30 );
add_action( 'willydevtheme_post_loop', 'willydevtheme_post_taxonomy', 40 );

add_action( 'willydevtheme_post_header_top', 'willydevtheme_post_thumbnail', 10 );

add_action( 'willydevtheme_post_content_bottom', 'willydevtheme_post_meta', 10 );
add_action( 'willydevtheme_post_content_bottom', 'willydevtheme_post_nav', 10 );

add_action( 'willydevtheme_post_loop_bottom', 'willydevtheme_display_comments', 10 );

add_action( 'willydevtheme_loop_after', 'willydevtheme_paging_nav', 10 );

/**
 * Post excerpt default
 * 
 * @source /template-parts/excerpt/excerpt.php
 * 
 * @see willydevtheme_post_excerpt_header()
 * @see willydevtheme_post_excerpt_content()
 * @see willydevtheme_post_thumbnail()
 * @see  willydevtheme_post_thumbnail()
 * @see  willydevtheme_post_meta()
 * @see  willydevtheme_post_nav()
 */
add_action( 'willydevtheme_post_excerpt', 'willydevtheme_post_excerpt_header' );
add_action( 'willydevtheme_post_excerpt', 'willydevtheme_post_excerpt_content' );

add_action( 'willydevtheme_post_excerpt_header_top', 'willydevtheme_post_thumbnail' );
add_action( 'willydevtheme_post_excerpt_header_top', 'willydevtheme_post_taxonomy' );

add_action( 'willydevtheme_post_excerpt_bottom', 'willydevtheme_post_meta' );
add_action( 'willydevtheme_post_excerpt_bottom', 'willydevtheme_post_nav', 10 );

/**
 * Post format
 * 
 * @source template-parts/excerpt/
 * 
 * @see excerpt-image.php
 */
add_action( 'willydevtheme_post_excerpt_image_bottom', 'willydevtheme_post_taxonomy' );
add_action( 'willydevtheme_post_excerpt_image_bottom', 'willydevtheme_post_meta' );


/**
 * Single post
 * 
 * @see willydevtheme_post_taxonomy - 10
 * @see willydevtheme_post_share (pendiente)
 * @see willydevtheme_post_thumbnail - 10
 * @see willydevtheme_post_excerpt - 10
 * @see willydevtheme_post_meta - 10
 * 
 */
add_action( 'willydevtheme_single_post', 'willydevtheme_single_post_header', 10 );
add_action( 'willydevtheme_single_post', 'willydevtheme_single_post_content', 30 );

add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_post_taxonomy', 10 );
add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_post_thumbnail', 10 );
add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_post_excerpt', 10 );
add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_post_meta', 10 );

add_action( 'willydevtheme_single_post_bottom', 'willydevtheme_edit_post_link', 10 );
add_action( 'willydevtheme_single_post_bottom', 'willydevtheme_post_nav', 10 );
add_action( 'willydevtheme_single_post_bottom', 'willydevtheme_display_comments', 20 );

/**
 * Pages
 *
 * @see  willydevtheme_page_header()
 * @see  willydevtheme_page_content()
 * @see  willydevtheme_display_comments()
 */
add_action( 'willydevtheme_page', 'willydevtheme_page_header', 10 );
add_action( 'willydevtheme_page', 'willydevtheme_page_content', 20 );

add_action( 'willydevtheme_page_header_top', 'willydevtheme_post_thumbnail', 10 );

add_action( 'willydevtheme_page_bottom', 'willydevtheme_edit_post_link', 30 );
add_action( 'willydevtheme_page_bottom', 'willydevtheme_display_comments', 40 );

/**
 * Frontpage
 * 
 * @see willydevtheme_frontpage_header()
 * @see willydevtheme_frontpage_content()
 */
add_action('willydevtheme_frontpage', 'willydevtheme_frontpage_header', 10);
add_action('willydevtheme_frontpage', 'willydevtheme_frontpage_content', 20);

add_action( 'willydevtheme_frontpage_content_header', 'willydevtheme_post_excerpt', 10 );

/**
 * Archive page
 */
add_action( 'willydevtheme_loop_before', 'willydevtheme_archive_header' );