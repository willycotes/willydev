<?php
/**
 * Template used to display post content.
 *
 * @package willydevtheme
 */
?>

<div id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	/**
	 * Functions hooked in to willydevtheme_loop_post action.
	 *
	 * @hooked willydevtheme_frontpage_header         - 10
	 * 
	 * @hooked willydevtheme_frontpage_content         - 20
	 */
	do_action( 'willydevtheme_content_frontpage' );
	?>
</div>
