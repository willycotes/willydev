<?php
/**
 * The template for displaying the shop page.
 *
 * Template name: Shop page
 *
 * @package willydevtheme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php
			/**
			 * Functions hooked in to homepage action
			 *
			 * @hooked willydevtheme_homepage_content      - 10
			 * @hooked willydevtheme_product_categories    - 20
			 * @hooked willydevtheme_recent_products       - 30
			 * @hooked willydevtheme_featured_products     - 40
			 * @hooked willydevtheme_popular_products      - 50
			 * @hooked willydevtheme_on_sale_products      - 60
			 * @hooked willydevtheme_best_selling_products - 70
			 */
			do_action( 'willydevtheme_shop' );
			?>

		</main><!-- #main -->
	</div><!-- #primary -->
<?php

/**
 * @hooked
 */
do_action( 'willydevtheme_shop_sidebar' );
get_footer();
