<?php
/**
 * The template for displaying all single posts.
 *
 * @package willydevtheme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		while ( have_posts() ) :
			the_post();

			do_action( 'willydevtheme_single_post_loop_before' );

			get_template_part( 'template-parts/content/content', 'single' );

			do_action( 'willydevtheme_single_post_loop_after' );

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
do_action( 'willydevtheme_sidebar' );
get_footer();
