<?php
/**
 * Template used to display post content on single pages.
 *
 * @package willydevtheme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php
	do_action( 'willydevtheme_single_post_top' );

	/**
	 * Functions hooked into willydevtheme_single_post add_action
	 *
	 * @hooked willydevtheme_post_header          - 10
	 * @hooked willydevtheme_post_content         - 30
	 */
	do_action( 'willydevtheme_single_post' );

	/**
	 * Functions hooked in to willydevtheme_single_post_bottom action
	 *
	 * @hooked willydevtheme_post_nav         - 10
	 * @hooked willydevtheme_display_comments - 20
	 */
	do_action( 'willydevtheme_single_post_bottom' );
	?>

</article><!-- #post-## -->
