<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package willydevtheme
 */

?>

	</div><!-- #content -->

	<?php do_action( 'willydevtheme_before_footer' ); ?>

	<footer id="footer" class="site-footer" role="contentinfo">

			<?php
			/**
			 * Functions hooked in to willydevtheme_footer action
			 *
			 * @hooked willydevtheme_footer_widgets - 10
			 * @hooked willydevtheme_credit         - 20
			 */
			do_action( 'willydevtheme_footer' );
			?>

	</footer>

	<?php do_action( 'willydevtheme_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
