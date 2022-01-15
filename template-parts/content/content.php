<?php
/**
 * Template used to display post content.
 *
 * @package willydevtheme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php do_action( 'willydevtheme_post_loop_top' ); ?>

	<?php
	/**
	 * Functions hooked in to willydevtheme_post_loop action.
	 *
	 * @hooked willydevtheme_post_header          - 10
	 * @hooked willydevtheme_post_content         - 30
	 * @hooked willydevtheme_post_taxonomy        - 40
	 */
	do_action( 'willydevtheme_post_loop' );
	?>
	
	<?php do_action( 'willydevtheme_post_loop_bottom' ); ?>

</article><!-- #post-## -->
