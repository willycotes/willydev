<?php
/**
 * willydevtheme WooCommerce Customizer Class
 *
 * @package  willydevtheme
 * @since    2.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'willydevtheme_WooCommerce_Customizer' ) ) :

	/**
	 * The willydevtheme Customizer class
	 */
	class willydevtheme_WooCommerce_Customizer extends willydevtheme_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 2.4.0
		 * @return void
		 */
		public function __construct() {
			add_action( 'customize_register', array( $this, 'customize_register' ), 10 );
			add_action( 'wp_enqueue_scripts', array( $this, 'add_customizer_css' ), 130 );
			add_filter( 'willydevtheme_setting_default_values', array( $this, 'setting_default_values' ) );
		}

		/**
		 * Returns an array of the desired default willydevtheme Options
		 *
		 * @param array $defaults array of default options.
		 * @since 2.4.0
		 * @return array
		 */
		public function setting_default_values( $defaults = array() ) {
			$defaults['willydevtheme_sticky_add_to_cart'] = true;
			$defaults['willydevtheme_product_pagination'] = true;

			return $defaults;
		}

		/**
		 * Add postMessage support for site title and description for the Theme Customizer along with several other settings.
		 *
		 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
		 * @since 2.4.0
		 */
		public function customize_register( $wp_customize ) {

			/**
			 * Product Page
			 */
			$wp_customize->add_section(
				'willydevtheme_single_product_page',
				array(
					'title'    => __( 'Product Page', 'willydevtheme' ),
					'priority' => 10,
					'panel'    => 'woocommerce',
				)
			);

			$wp_customize->add_setting(
				'willydevtheme_product_pagination',
				array(
					'default'           => apply_filters( 'willydevtheme_default_product_pagination', true ),
					'sanitize_callback' => 'wp_validate_boolean',
				)
			);

			$wp_customize->add_setting(
				'willydevtheme_sticky_add_to_cart',
				array(
					'default'           => apply_filters( 'willydevtheme_default_sticky_add_to_cart', true ),
					'sanitize_callback' => 'wp_validate_boolean',
				)
			);

			$wp_customize->add_control(
				'willydevtheme_sticky_add_to_cart',
				array(
					'type'        => 'checkbox',
					'section'     => 'willydevtheme_single_product_page',
					'label'       => __( 'Sticky Add-To-Cart', 'willydevtheme' ),
					'description' => __( 'A small content bar at the top of the browser window which includes relevant product information and an add-to-cart button. It slides into view once the standard add-to-cart button has scrolled out of view.', 'willydevtheme' ),
					'priority'    => 10,
				)
			);

			$wp_customize->add_control(
				'willydevtheme_product_pagination',
				array(
					'type'        => 'checkbox',
					'section'     => 'willydevtheme_single_product_page',
					'label'       => __( 'Product Pagination', 'willydevtheme' ),
					'description' => __( 'Displays next and previous links on product pages. A product thumbnail is displayed with the title revealed on hover.', 'willydevtheme' ),
					'priority'    => 20,
				)
			);
		}

		/**
		 * Get Customizer css.
		 *
		 * @see get_willydevtheme_theme_mods()
		 * @since 2.4.0
		 * @return string $styles the css
		 */
		public function get_css() {
			$willydevtheme_theme_mods = $this->get_willydevtheme_theme_mods();
			$brighten_factor       = apply_filters( 'willydevtheme_brighten_factor', 25 );
			$darken_factor         = apply_filters( 'willydevtheme_darken_factor', -25 );

			$styles = '
			a.cart-contents,
			.site-header-cart .widget_shopping_cart a {
				color: ' . $willydevtheme_theme_mods['header_link_color'] . ';
			}

			a.cart-contents:hover,
			.site-header-cart .widget_shopping_cart a:hover,
			.site-header-cart:hover > li > a {
				color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['header_link_color'], 65 ) . ';
			}

			table.cart td.product-remove,
			table.cart td.actions {
				border-top-color: ' . $willydevtheme_theme_mods['background_color'] . ';
			}

			.willydevtheme-handheld-footer-bar ul li.cart .count {
				background-color: ' . $willydevtheme_theme_mods['header_link_color'] . ';
				color: ' . $willydevtheme_theme_mods['header_background_color'] . ';
				border-color: ' . $willydevtheme_theme_mods['header_background_color'] . ';
			}

			.woocommerce-tabs ul.tabs li.active a,
			ul.products li.product .price,
			.onsale,
			.wc-block-grid__product-onsale,
			.widget_search form:before,
			.widget_product_search form:before {
				color: ' . $willydevtheme_theme_mods['text_color'] . ';
			}

			.woocommerce-breadcrumb a,
			a.woocommerce-review-link,
			.product_meta a {
				color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['text_color'], 5 ) . ';
			}

			.wc-block-grid__product-onsale,
			.onsale {
				border-color: ' . $willydevtheme_theme_mods['text_color'] . ';
			}

			.star-rating span:before,
			.quantity .plus, .quantity .minus,
			p.stars a:hover:after,
			p.stars a:after,
			.star-rating span:before,
			#payment .payment_methods li input[type=radio]:first-child:checked+label:before {
				color: ' . $willydevtheme_theme_mods['accent_color'] . ';
			}

			.widget_price_filter .ui-slider .ui-slider-range,
			.widget_price_filter .ui-slider .ui-slider-handle {
				background-color: ' . $willydevtheme_theme_mods['accent_color'] . ';
			}

			.order_details {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], -7 ) . ';
			}

			.order_details > li {
				border-bottom: 1px dotted ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], -28 ) . ';
			}

			.order_details:before,
			.order_details:after {
				background: -webkit-linear-gradient(transparent 0,transparent 0),-webkit-linear-gradient(135deg,' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], -7 ) . ' 33.33%,transparent 33.33%),-webkit-linear-gradient(45deg,' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], -7 ) . ' 33.33%,transparent 33.33%)
			}

			#order_review {
				background-color: ' . $willydevtheme_theme_mods['background_color'] . ';
			}

			#payment .payment_methods > li .payment_box,
			#payment .place-order {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], -5 ) . ';
			}

			#payment .payment_methods > li:not(.woocommerce-notice) {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], -10 ) . ';
			}

			#payment .payment_methods > li:not(.woocommerce-notice):hover {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], -15 ) . ';
			}

			.woocommerce-pagination .page-numbers li .page-numbers.current {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['background_color'], $darken_factor ) . ';
				color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['text_color'], -10 ) . ';
			}

			.wc-block-grid__product-onsale,
			.onsale,
			.woocommerce-pagination .page-numbers li .page-numbers:not(.current) {
				color: ' . $willydevtheme_theme_mods['text_color'] . ';
			}

			p.stars a:before,
			p.stars a:hover~a:before,
			p.stars.selected a.active~a:before {
				color: ' . $willydevtheme_theme_mods['text_color'] . ';
			}

			p.stars.selected a.active:before,
			p.stars:hover a:before,
			p.stars.selected a:not(.active):before,
			p.stars.selected a.active:before {
				color: ' . $willydevtheme_theme_mods['accent_color'] . ';
			}

			.single-product div.product .woocommerce-product-gallery .woocommerce-product-gallery__trigger {
				background-color: ' . $willydevtheme_theme_mods['button_background_color'] . ';
				color: ' . $willydevtheme_theme_mods['button_text_color'] . ';
			}

			.single-product div.product .woocommerce-product-gallery .woocommerce-product-gallery__trigger:hover {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['button_background_color'], $darken_factor ) . ';
				border-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['button_background_color'], $darken_factor ) . ';
				color: ' . $willydevtheme_theme_mods['button_text_color'] . ';
			}

			.button.added_to_cart:focus,
			.button.wc-forward:focus {
				outline-color: ' . $willydevtheme_theme_mods['accent_color'] . ';
			}

			.added_to_cart,
			.site-header-cart .widget_shopping_cart a.button,
			.wc-block-grid__products .wc-block-grid__product .wp-block-button__link {
				background-color: ' . $willydevtheme_theme_mods['button_background_color'] . ';
				border-color: ' . $willydevtheme_theme_mods['button_background_color'] . ';
				color: ' . $willydevtheme_theme_mods['button_text_color'] . ';
			}

			.added_to_cart:hover,
			.site-header-cart .widget_shopping_cart a.button:hover,
			.wc-block-grid__products .wc-block-grid__product .wp-block-button__link:hover {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['button_background_color'], $darken_factor ) . ';
				border-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['button_background_color'], $darken_factor ) . ';
				color: ' . $willydevtheme_theme_mods['button_text_color'] . ';
			}

			.added_to_cart.alt, .added_to_cart, .widget a.button.checkout {
				background-color: ' . $willydevtheme_theme_mods['button_alt_background_color'] . ';
				border-color: ' . $willydevtheme_theme_mods['button_alt_background_color'] . ';
				color: ' . $willydevtheme_theme_mods['button_alt_text_color'] . ';
			}

			.added_to_cart.alt:hover, .added_to_cart:hover, .widget a.button.checkout:hover {
				background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['button_alt_background_color'], $darken_factor ) . ';
				border-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['button_alt_background_color'], $darken_factor ) . ';
				color: ' . $willydevtheme_theme_mods['button_alt_text_color'] . ';
			}

			.button.loading {
				color: ' . $willydevtheme_theme_mods['button_background_color'] . ';
			}

			.button.loading:hover {
				background-color: ' . $willydevtheme_theme_mods['button_background_color'] . ';
			}

			.button.loading:after {
				color: ' . $willydevtheme_theme_mods['button_text_color'] . ';
			}

			@media screen and ( min-width: 768px ) {
				.site-header-cart .widget_shopping_cart,
				.site-header .product_list_widget li .quantity {
					color: ' . $willydevtheme_theme_mods['header_text_color'] . ';
				}

				.site-header-cart .widget_shopping_cart .buttons,
				.site-header-cart .widget_shopping_cart .total {
					background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['header_background_color'], -10 ) . ';
				}

				.site-header-cart .widget_shopping_cart {
					background-color: ' . willydevtheme_adjust_color_brightness( $willydevtheme_theme_mods['header_background_color'], -15 ) . ';
				}
			}';

			if ( ! class_exists( 'willydevtheme_Product_Pagination' ) ) {
				$styles .= '
				.willydevtheme-product-pagination a {
					color: ' . $willydevtheme_theme_mods['text_color'] . ';
					background-color: ' . $willydevtheme_theme_mods['background_color'] . ';
				}';
			}

			if ( ! class_exists( 'willydevtheme_Sticky_Add_to_Cart' ) ) {
				$styles .= '
				.willydevtheme-sticky-add-to-cart {
					color: ' . $willydevtheme_theme_mods['text_color'] . ';
					background-color: ' . $willydevtheme_theme_mods['background_color'] . ';
				}

				.willydevtheme-sticky-add-to-cart a:not(.button) {
					color: ' . $willydevtheme_theme_mods['header_link_color'] . ';
				}';
			}

			return apply_filters( 'willydevtheme_customizer_woocommerce_css', $styles );
		}

		/**
		 * Add CSS in <head> for styles handled by the theme customizer
		 *
		 * @since 2.4.0
		 * @return void
		 */
		public function add_customizer_css() {
			wp_add_inline_style( 'willydevtheme-woocommerce-style', $this->get_css() );
		}

	}

endif;

return new willydevtheme_WooCommerce_Customizer();
