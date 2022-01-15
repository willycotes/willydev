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
	 * @hooked
	 */
	do_action( 'willydevtheme_frontpage_top' );
	?>

	<?php
	/**
	 * Functions hooked in to willydevtheme_loop_post action.
	 *
	 * @hooked willydevtheme_frontpage_header         - 10
	 * 
	 * @hooked willydevtheme_frontpage_content         - 20
	 */
	do_action( 'willydevtheme_frontpage' );
	?>

	<?php 
	/**
	 * @hooked
	 */
	do_action( 'willydevtheme_frontpage_bottom' );
	?>

</div>
