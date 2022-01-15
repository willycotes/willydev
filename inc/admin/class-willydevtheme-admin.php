<?php
/**
 * willydevtheme Admin Class
 *
 * @package  willydevtheme
 * @since    2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'willydevtheme_Admin' ) ) :
	/**
	 * The willydevtheme admin class
	 */
	class willydevtheme_Admin {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {
			add_action( 'admin_menu', array( $this, 'welcome_register_menu' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'welcome_style' ) );
		}

		/**
		 * Load welcome screen css
		 *
		 * @param string $hook_suffix the current page hook suffix.
		 * @return void
		 * @since  1.4.4
		 */
		public function welcome_style( $hook_suffix ) {
			global $willydevtheme_version;

			if ( 'appearance_page_willydevtheme-welcome' === $hook_suffix ) {
				wp_enqueue_style( 'willydevtheme-welcome-screen', get_template_directory_uri() . '/assets/css/admin/welcome-screen/welcome.css', array(), $willydevtheme_version );
				wp_style_add_data( 'willydevtheme-welcome-screen', 'rtl', 'replace' );
			}
		}

		/**
		 * Creates the dashboard page
		 *
		 * @see  add_theme_page()
		 * @since 1.0.0
		 */
		public function welcome_register_menu() {
			add_theme_page( 'willydevtheme', 'willydevtheme', 'activate_plugins', 'willydevtheme-welcome', array( $this, 'willydevtheme_welcome_screen' ) );
		}

		/**
		 * The welcome screen
		 *
		 * @since 1.0.0
		 */
		public function willydevtheme_welcome_screen() {
			require_once ABSPATH . 'wp-load.php';
			require_once ABSPATH . 'wp-admin/admin.php';
			require_once ABSPATH . 'wp-admin/admin-header.php';

			global $willydevtheme_version;

			$show_setup_screen = ( false === (bool) get_option( 'willydevtheme_nux_dismissed' ) ) && ( defined( 'WC_VERSION' ) && version_compare( WC_VERSION, '4.8.0', '>=' ) );
			?>

			<div class="willydevtheme-wrap">
				<section class="willydevtheme-welcome-nav">
					<span class="willydevtheme-welcome-nav__version">willydevtheme <?php echo esc_attr( $willydevtheme_version ); ?></span>
					<ul>
						<li><a href="https://wordpress.org/support/theme/willydevtheme" target="_blank"><?php esc_html_e( 'Support', 'willydevtheme' ); ?></a></li>
						<li><a href="https://docs.woocommerce.com/documentation/themes/willydevtheme/" target="_blank"><?php esc_html_e( 'Documentation', 'willydevtheme' ); ?></a></li>
						<li><a href="https://woocommerce.wordpress.com/category/willydevtheme/" target="_blank"><?php esc_html_e( 'Development blog', 'willydevtheme' ); ?></a></li>
					</ul>
				</section>

				<div class="willydevtheme-logo">
					<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/admin/willydevtheme-icon.svg" alt="willydevtheme" />
				</div>

				<div class="willydevtheme-intro">
					<?php
					if ( $show_setup_screen ) {
						?>
						<div class="willydevtheme-intro-setup">
							<?php
							willydevtheme_NUX_Admin::admin_notices_content();
							?>
						</div>
						<?php
						echo '<div class="willydevtheme-intro-message" style="display:none">';
					}

					/**
					 * Display a different message when the user visits this page when returning from the guided tour
					 */
					$referrer = wp_get_referer();

					if ( strpos( $referrer, 'sf_starter_content' ) !== false ) {
						/* translators: 1: HTML, 2: HTML */
						echo '<h1>' . sprintf( esc_attr__( 'Setup complete %1$sYour willydevtheme adventure begins now 🚀%2$s ', 'willydevtheme' ), '<span>', '</span>' ) . '</h1>';
						echo '<p>' . esc_attr__( 'One more thing... You might be interested in the following willydevtheme extensions and designs.', 'willydevtheme' ) . '</p>';
					} else {
						echo '<p>' . esc_attr__( 'Hello! You might be interested in the following willydevtheme extensions and designs.', 'willydevtheme' ) . '</p>';
					}

					if ( $show_setup_screen ) {
						echo '</div>';
					}
					?>
				</div>

				<div class="willydevtheme-enhance">
					<div class="willydevtheme-enhance__column willydevtheme-bundle">
						<h3><?php esc_html_e( 'willydevtheme Extensions Bundle', 'willydevtheme' ); ?></h3>
						<span class="bundle-image">
							<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/admin/welcome-screen/willydevtheme-bundle-hero.png" alt="willydevtheme Extensions Hero" />
						</span>

						<p>
							<?php esc_html_e( 'All the tools you\'ll need to define your style and customize willydevtheme.', 'willydevtheme' ); ?>
						</p>

						<p>
							<?php esc_html_e( 'Make it yours without touching code with the willydevtheme Extensions bundle. Express yourself, optimize conversions, delight customers.', 'willydevtheme' ); ?>
						</p>


						<p>
							<a href="https://woocommerce.com/products/willydevtheme-extensions-bundle/?utm_source=willydevtheme&utm_medium=product&utm_campaign=willydevthemeaddons" class="willydevtheme-button" target="_blank"><?php esc_html_e( 'Read more and purchase', 'willydevtheme' ); ?></a>
						</p>
					</div>
					<div class="willydevtheme-enhance__column willydevtheme-child-themes">
						<h3><?php esc_html_e( 'Alternate designs', 'willydevtheme' ); ?></h3>
						<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/admin/welcome-screen/child-themes.jpg" alt="willydevtheme Powerpack" />

						<p>
							<?php esc_html_e( 'Quickly and easily transform your shops appearance with willydevtheme child themes.', 'willydevtheme' ); ?>
						</p>

						<p>
							<?php esc_html_e( 'Each has been designed to serve a different industry - from fashion to food.', 'willydevtheme' ); ?>
						</p>

						<p>
							<?php esc_html_e( 'Of course they are all fully compatible with each willydevtheme extension.', 'willydevtheme' ); ?>
						</p>

						<p>
							<a href="https://woocommerce.com/product-category/themes/willydevtheme-child-theme-themes/?utm_source=willydevtheme&utm_medium=product&utm_campaign=willydevthemeaddons" class="willydevtheme-button" target="_blank"><?php esc_html_e( 'Check \'em out', 'willydevtheme' ); ?></a>
						</p>
					</div>
				</div>

				<div class="automattic">
					<p>
					<?php
						/* translators: %s: Automattic branding */
						printf( esc_html__( 'An %s project', 'willydevtheme' ), '<a href="https://automattic.com/"><img src="' . esc_url( get_template_directory_uri() ) . '/assets/images/admin/welcome-screen/automattic.png" alt="Automattic" /></a>' );
					?>
					</p>
				</div>
			</div>
			<?php
		}

		/**
		 * Welcome screen intro
		 *
		 * @since 1.0.0
		 */
		public function welcome_intro() {
			require_once get_template_directory() . '/inc/admin/welcome-screen/component-intro.php';
		}

		/**
		 * Output a button that will install or activate a plugin if it doesn't exist, or display a disabled button if the
		 * plugin is already activated.
		 *
		 * @param string $plugin_slug The plugin slug.
		 * @param string $plugin_file The plugin file.
		 */
		public function install_plugin_button( $plugin_slug, $plugin_file ) {
			if ( current_user_can( 'install_plugins' ) && current_user_can( 'activate_plugins' ) ) {
				if ( is_plugin_active( $plugin_slug . '/' . $plugin_file ) ) {
					// The plugin is already active.
					$button = array(
						'message' => esc_attr__( 'Activated', 'willydevtheme' ),
						'url'     => '#',
						'classes' => 'disabled',
					);
				} elseif ( $this->is_plugin_installed( $plugin_slug ) ) {
					$url = $this->is_plugin_installed( $plugin_slug );

					// The plugin exists but isn't activated yet.
					$button = array(
						'message' => esc_attr__( 'Activate', 'willydevtheme' ),
						'url'     => $url,
						'classes' => 'activate-now',
					);
				} else {
					// The plugin doesn't exist.
					$url    = wp_nonce_url(
						add_query_arg(
							array(
								'action' => 'install-plugin',
								'plugin' => $plugin_slug,
							),
							self_admin_url( 'update.php' )
						),
						'install-plugin_' . $plugin_slug
					);
					$button = array(
						'message' => esc_attr__( 'Install now', 'willydevtheme' ),
						'url'     => $url,
						'classes' => ' install-now install-' . $plugin_slug,
					);
				}
				?>
				<a href="<?php echo esc_url( $button['url'] ); ?>" class="willydevtheme-button <?php echo esc_attr( $button['classes'] ); ?>" data-originaltext="<?php echo esc_attr( $button['message'] ); ?>" data-slug="<?php echo esc_attr( $plugin_slug ); ?>" aria-label="<?php echo esc_attr( $button['message'] ); ?>"><?php echo esc_html( $button['message'] ); ?></a>
				<a href="https://wordpress.org/plugins/<?php echo esc_attr( $plugin_slug ); ?>" target="_blank"><?php esc_html_e( 'Learn more', 'willydevtheme' ); ?></a>
				<?php
			}
		}

		/**
		 * Check if a plugin is installed and return the url to activate it if so.
		 *
		 * @param string $plugin_slug The plugin slug.
		 */
		private function is_plugin_installed( $plugin_slug ) {
			if ( file_exists( WP_PLUGIN_DIR . '/' . $plugin_slug ) ) {
				$plugins = get_plugins( '/' . $plugin_slug );
				if ( ! empty( $plugins ) ) {
					$keys        = array_keys( $plugins );
					$plugin_file = $plugin_slug . '/' . $keys[0];
					$url         = wp_nonce_url(
						add_query_arg(
							array(
								'action' => 'activate',
								'plugin' => $plugin_file,
							),
							admin_url( 'plugins.php' )
						),
						'activate-plugin_' . $plugin_file
					);
					return $url;
				}
			}
			return false;
		}
		/**
		 * Welcome screen enhance section
		 *
		 * @since 1.5.2
		 */
		public function welcome_enhance() {
			require_once get_template_directory() . '/inc/admin/welcome-screen/component-enhance.php';
		}

		/**
		 * Welcome screen contribute section
		 *
		 * @since 1.5.2
		 */
		public function welcome_contribute() {
			require_once get_template_directory() . '/inc/admin/welcome-screen/component-contribute.php';
		}

		/**
		 * Get product data from json
		 *
		 * @param  string $url       URL to the json file.
		 * @param  string $transient Name the transient.
		 * @return [type]            [description]
		 */
		public function get_willydevtheme_product_data( $url, $transient ) {
			$raw_products = wp_safe_remote_get( $url );
			$products     = json_decode( wp_remote_retrieve_body( $raw_products ) );

			if ( ! empty( $products ) ) {
				set_transient( $transient, $products, DAY_IN_SECONDS );
			}

			return $products;
		}
	}

endif;

return new willydevtheme_Admin();
