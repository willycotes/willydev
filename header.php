<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package willydevtheme
 */

?><!doctype html>
<html <?php language_attributes(); ?> <?php willydevtheme_the_html_classes() ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php wp_body_open(); ?>

	<?php do_action( 'willydevtheme_before_site' ); ?>

	<div id="page" class="hfeed site">

		<?php do_action( 'willydevtheme_before_header' ); ?>

		<header id="masthead" class="site-header">
		
			<?php willydevtheme_skip_links(); ?>

			<div class="site-branding">

				<?php willydevtheme_site_title_or_logo(); ?>

			</div>

			<div class="search-form">
				<!-- search -->
			</div>

			<div class="header-links">
				<ul class="header-links__menu">
					<li class="wishlist">
						<!-- a.wishlist__link -->
					</li>
					<li class="push-notifications">
						<!-- a.push-notifications__modal -->
					</li>
					<li class="my-account">
						<div class="login-register-links">
							<a href="#" class="login-link"><?php esc_html_e('Login', 'willydevtheme'); ?></a>
							<a href="#" class="register-link"><?php esc_html_e('Register', 'willydevtheme'); ?></a>
						</div>
						<div class="user-avatar logged">
							<!-- avatar user login -->
						</div>
						<div class="my-account-modal">
							<div class="my-account-modal__header">
								<!-- header  modal -->
							</div>
							<nav class="my-account-nav">
								<ul class="my-account__list">
									<li class="my-account__item">
										<!-- item 1 -->
									</li>
								</ul>
							</nav>
						</div>
					</li>
				</ul>
			</div>

		<?php do_action( 'willydevtheme_header' ); ?>

		</header><!-- #masthead -->
		
		<?php willydevtheme_primary_navigation(); ?>

		<?php
		/**
		 * Functions hooked in to willydevtheme_before_content
		 *
		 * @hooked willydevtheme_header_widget_region - 10
		 * @hooked woocommerce_breadcrumb - 10
		 */
		do_action( 'willydevtheme_before_content' );
		?>

		<div id="content" class="site-content" tabindex="-1">

		<?php
		do_action( 'willydevtheme_content_top' );
