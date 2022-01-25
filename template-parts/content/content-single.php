<?php
/**
 * Template used to display post content on single pages.
 *
 * @package willydevtheme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php

	/**
	 * @hooked willydevtheme_post_header          - 10
	 * @hooked willydevtheme_post_content         - 20
	 * @hooked willydevtheme_edit_post_link				- 30
	 * @hooked willydevtheme_post_nav             - 40
	 * @hooked willydevtheme_display_comments     - 50
	 */
	do_action( 'willydevtheme_single_post' );

	?>
</article><!-- #post-## -->
