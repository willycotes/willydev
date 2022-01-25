<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package willydevtheme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	/**
	 * Functions hooked in to willydevtheme_page add_action
	 *
	 * @hooked willydevtheme_page_header          - 10
	 * @hooked willydevtheme_page_content         - 20
	 * @hooked willydevtheme_edit_post_link       - 30
	 * @hooked willydevtheme_display_comments     - 40
	 */
	do_action( 'willydevtheme_page' );
	?>
</article><!-- #post-## -->
