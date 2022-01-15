<?php // @codingStandardsIgnoreLine.
/**
 * Class to create a Customizer control for displaying information
 *
 * @package  willydevtheme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The 'more' willydevtheme control class
 */
class More_willydevtheme_Control extends WP_Customize_Control {

	/**
	 * Render the content on the theme customizer page
	 */
	public function render_content() {
		?>
		<label style="overflow: hidden; zoom: 1;">

			<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>

			<p>
				<?php
					/* translators: 1: willydevtheme, 2: start <a> tag, 3: willydevtheme, 4: end <a> tag */
					printf( esc_html__( 'There\'s a range of %1$s extensions available to put additional power in your hands. Check out the %2$s%3$s%4$s page in your dashboard for more information.', 'willydevtheme' ), 'willydevtheme', '<a href="' . esc_url( admin_url() . 'themes.php?page=willydevtheme-welcome' ) . '">', 'willydevtheme', '</a>' );
				?>
			</p>

			<span class="customize-control-title">
				<?php
					/* translators: %s: willydevtheme */
					printf( esc_html__( 'Enjoying %s?', 'willydevtheme' ), 'willydevtheme' );
				?>
			</span>

			<p>
				<?php
					/* translators: 1: start <a> tag, 2: end <a> tag */
					printf( esc_html__( 'Why not leave us a review on %1$sWordPress.org%2$s?  We\'d really appreciate it!', 'willydevtheme' ), '<a href="https://wordpress.org/themes/willydevtheme">', '</a>' );
				?>
			</p>

		</label>
		<?php
	}
}
