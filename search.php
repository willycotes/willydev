<?php
/**
 * The template for displaying search results pages.
 *
 * @package willydevtheme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">
					<?php
						/* translators: %s: search term */
						printf( esc_attr__( 'Search Results for: %s', 'willydevtheme' ), '<span>' . get_search_query() . '</span>' );
					?>
				</h1>
			</header><!-- .page-header -->

			<?php
			/**
			 * @hooked
			 */
			do_action( 'willydevtheme_search_loop_before' );

			while ( have_posts() ) :
				the_post();

				/**
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/excerpt/excerpt', get_post_format() );
			endwhile;

			/**
			 *
			 * @hooked willydevtheme_paging_nav - 10
			 */
			do_action( 'willydevtheme_search_loop_after' );

		else :

			get_template_part( 'template-parts/content/content', 'none' );

		endif;
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

/**
 * @hooked
 */
do_action( 'willydevtheme_search_sidebar' );
get_footer();
