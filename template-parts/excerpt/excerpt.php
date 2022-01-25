<?php
/**
 * Content default excerpt 
 *
 * Template part for displaying homepage (blog), post archives and search results
 *
 */
?>

<!-- #post-${ID} -->
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php

	/**
	 * @hooked willydevtheme_post_excerpt_header - 10
	 * @hooked willydevtheme_post_excerpt_content - 10
	 */
	do_action( 'willydevtheme_post_excerpt' );
	?>
</article>
