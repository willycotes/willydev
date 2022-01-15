<?php
/**
 * Show the appropriate content for the Image post format.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage willydevtheme
 * @since Twenty Twenty-One 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<?php do_action( 'willydevtheme_post_excerpt_image_top' ); ?>

<?php 

// If there is no featured-image, print the first image block found.
if (
	! willydevtheme_can_show_post_thumbnail() &&
	has_block( 'core/image', get_the_content() )
) {

	willydevtheme_print_first_instance_of_block( 'core/image', get_the_content() );
} else {
	willydevtheme_post_thumbnail();
}

the_title( sprintf( '<h2 class="entry-title"><a href="%s" class="entry-title__link">', esc_url( get_permalink() ) ),'</a></h2>' );

?>

<?php 
/**
 * @hooked willydevtheme_post_header
 */
do_action( 'willydevtheme_post_excerpt_image_bottom' ); ?>
 
</article>

