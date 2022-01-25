<?php
/**
 * Template used to display default content.
 *
 * @package willydevtheme
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	/**
	 * Functions hooked in to willydevtheme_content action.
	 *
	 * @hooked willydevtheme_post_header          - 10
	 * @hooked willydevtheme_post_content         - 10
	 * @hooked willydevtheme_post_nav 						- 10
	 */
	do_action( 'willydevtheme_content' );
	?>
</article><!-- #post-## -->
