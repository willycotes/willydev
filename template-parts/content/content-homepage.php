<?php
/**
 * The template used for displaying homepage (blog).
 *
 * @package willydevtheme
 */

	do_action( 'willydevtheme_homepage_loop_before' );
		
	while ( have_posts() ) :
		the_post();
				
		// excerpt default 
		get_template_part( 'template-parts/excerpt/excerpt', get_post_format() );

	endwhile;

		/**
		* Functions hooked in to willydevtheme_homepage_loop_after action
		*
		* @hooked willydevtheme_paging_nav - 10
		* @hooked willydevtheme_homepage_content - 20
		*/
	do_action( 'willydevtheme_homepage_loop_after' );