<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package willydevtheme
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
	<?php

	if ( have_posts() ) :

		do_action( 'willydevtheme_frontpage_loop_before' );

		while ( have_posts() ) :

			the_post();

			get_template_part( 'template-parts/content/content', 'frontpage' );

		endwhile;

		/**
		 * Functions hooked in to willydevtheme_paging_nav action
		 *
		 * @hooked willydevtheme_paging_nav - 10
		 */
		do_action( 'willydevtheme_frontpage_loop_after' );


	else :

		get_template_part( 'template-parts/content/content', 'none' );

	endif;
	?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_sidebar();

get_footer();
