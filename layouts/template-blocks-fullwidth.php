<?php
/**
 * Template Name: Template blocks full width.
 * 
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
			the_content();
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

get_footer();
