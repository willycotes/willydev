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
	
	<?php do_action( 'willydevtheme_post_excerpt_top' ); ?>

	<?php 
	/**
	 * @hooked willydevtheme_post_header - 10
	 * @hooked willydevtheme_post_content - 20
	 */
	do_action( 'willydevtheme_post_excerpt');
	?>

	<?php do_action( 'willydevtheme_post_excerpt_bottom' ); ?>

</article>
