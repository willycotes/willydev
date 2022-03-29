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
add_action( 'willydevtheme_before_content', 'willydevtheme_primary_navigation', 10 );
add_action( 'willydevtheme_before_content', 'willydevtheme_header_widget_region', 20 );

/**
 * Header
 */
add_action( 'willydevtheme_header', 'willydevtheme_skip_links', 10 );
add_action( 'willydevtheme_header', 'willydevtheme_site_title_or_logo', 20 );

/**
 * Footer
 *
 * @see  willydevtheme_footer_widgets()
 * @see  willydevtheme_credit()
 */
add_action( 'willydevtheme_footer', 'willydevtheme_footer_widgets', 10 );
add_action( 'willydevtheme_footer', 'willydevtheme_credit', 20 );

/**
 * Posts default
 * 
 * @source /index.php
 * @source /template-parts/content/content.php
 * 
 * @see willydevtheme_post_header
 * @see willydevtheme_post_content
 */

// add_action( 'willydevtheme_main_top', 'willydevtheme_homepage_header', 10 );
// add_action( 'willydevtheme_homepage_header_bottom', 'willydevtheme_homepage_description', 10 );
add_action( 'willydevtheme_main_top', 'willydevtheme_breadcrumb', 10 );
add_action( 'willydevtheme_main_top', 'willydevtheme_homepage_header_hero', 20 );
add_action( 'willydevtheme_homepage_header_hero_bottom', 'willydevtheme_homepage_description', 10 );
add_action( 'willydevtheme_main_top', 'willydevtheme_archive_header', 20 );

add_action( 'willydevtheme_content', 'willydevtheme_post_header', 10 );
add_action( 'willydevtheme_content', 'willydevtheme_post_content', 10 );
add_action( 'willydevtheme_content', 'willydevtheme_post_nav', 10 );

add_action( 'willydevtheme_loop_after', 'willydevtheme_paging_nav', 10 );

/**
 * Homepage blog
 * 
 * Homepage blog page used post format
 *
 * @source /home.php
 *
 * @see  willydevtheme_homepage_header()
 * @see  willydevtheme_homepage_header_hero()
 * @see willydevtheme_homepage_description()
 * @see  willydevtheme_paging_nav()
 */

add_action( 'willydevtheme_homepage_main_top', 'willydevtheme_breadcrumb', 10 );
// add_action( 'willydevtheme_main_top', 'willydevtheme_homepage_header', 10 );
add_action( 'willydevtheme_homepage_main_top', 'willydevtheme_homepage_header_hero', 20 );
add_action( 'willydevtheme_homepage_header_hero_bottom', 'willydevtheme_homepage_description', 10 );

add_action( 'willydevtheme_homepage_loop_after', 'willydevtheme_paging_nav', 10 );

/**
 * Archive pages
 * 
 * @source /archive.php
 */
add_action( 'willydevtheme_archive_main_top', 'willydevtheme_breadcrumb', 10 );
add_action( 'willydevtheme_archive_main_top', 'willydevtheme_archive_header', 20 );
add_action( 'willydevtheme_archive_loop_after', 'willydevtheme_paging_nav', 10 );

/**
 * Post excerpt is default post format standard.
 * 
 * This excerpt template is includes in the home, archive and search pages.
 *
 * @source /template-parts/excerpt/excerpt.php
 */
add_action( 'willydevtheme_post_excerpt', 'willydevtheme_post_excerpt_header', 10 );
add_action( 'willydevtheme_post_excerpt', 'willydevtheme_post_excerpt_content', 10 );

add_action( 'willydevtheme_post_excerpt_header_top', 'willydevtheme_post_thumbnail', 10 );
add_action( 'willydevtheme_post_excerpt_header_bottom', 'willydevtheme_post_taxonomy', 10 );

/**
 * Search page
 * 
 * @source /search.php
 */
add_action( 'willydevtheme_search_loop_after', 'willydevtheme_paging_nav', 10 );

/**
 * Single post
 * 
 * @source /single.php
 * 
 * @see  willydevtheme_display_comments()
 */
add_action( 'willydevtheme_single_post_loop_before', 'willydevtheme_breadcrumb', 10 );
add_action( 'willydevtheme_single_post', 'willydevtheme_single_post_header', 10 );
add_action( 'willydevtheme_single_post', 'willydevtheme_single_post_content', 20 );
add_action( 'willydevtheme_single_post', 'willydevtheme_edit_post_link', 30 );
add_action( 'willydevtheme_single_post', 'willydevtheme_post_nav', 40 );
add_action( 'willydevtheme_single_post', 'willydevtheme_display_comments', 50 );

add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_post_taxonomy', 10 );
add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_post_thumbnail', 10 );
add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_the_excerpt', 10 );
add_action( 'willydevtheme_single_post_header_bottom', 'willydevtheme_post_meta', 10 );

/**
 * Pages
 *
 * @see  willydevtheme_page_header()
 * @see  willydevtheme_page_content()
 * @see  willydevtheme_display_comments()
 */
add_action( 'willydevtheme_page_loop_before', 'willydevtheme_breadcrumb', 10 );
add_action( 'willydevtheme_page', 'willydevtheme_page_header', 10 );
add_action( 'willydevtheme_page', 'willydevtheme_page_content', 20 );
add_action( 'willydevtheme_page', 'willydevtheme_edit_post_link', 30 );
add_action( 'willydevtheme_page', 'willydevtheme_display_comments', 40 );

/**
 * Frontpage
 * 
 * @see willydevtheme_frontpage_header()
 * @see willydevtheme_frontpage_content()
 */
add_action('willydevtheme_content_frontpage', 'willydevtheme_frontpage_header', 10);
add_action('willydevtheme_content_frontpage', 'willydevtheme_frontpage_content', 20);

add_action( 'willydevtheme_frontpage_header_bottom', 'willydevtheme_the_excerpt', 10 );
