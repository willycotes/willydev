<?php
/**
 * Template para testing functions
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
	<?php

	if ( have_posts() ) :

		do_action( 'willydevtheme_loop_before' );

while ( have_posts() ) :
	the_post();

	/**
	 * Include the Post-Format-specific template for the content.
	 * If you want to override this in a child theme, then include a file
	 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
	 */
	// get_template_part( 'template-parts/content/content', get_post_format() );

	the_excerpt(  );

endwhile;

/**
 * Functions hooked in to willydevtheme_paging_nav action
 *
 * @hooked willydevtheme_paging_nav - 10
 */
do_action( 'willydevtheme_loop_after' );

	else :

		get_template_part( 'template-parts/content/content', 'none' );

	endif;

	?>
	</main><!-- #main -->
</div><!-- #primary -->    
<?php

get_sidebar();

get_footer();
