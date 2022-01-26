<?php
/**
 * willydevtheme template functions.
 *
 * @package willydevtheme
 */

if ( ! function_exists( 'willydevtheme_display_comments' ) ) {
	/**
	 * Display comments
	 *
	 * Loads the comment template specified in $file args at comments_template function.
	 *
	 * @since  1.0.0
	 */
	function willydevtheme_display_comments() {
		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || 0 !== intval( get_comments_number() ) ) :
			comments_template();
		endif;
	}
}

if ( ! function_exists( 'willydevtheme_comment' ) ) {
	/**
	 * Comment template
	 *
	 * @param array $comment the comment array.
	 * @param array $args the comment args.
	 * @param int   $depth the comment depth.
	 * @since 1.0.0
	 */
	function willydevtheme_comment( $comment, $args, $depth ) {
		if ( 'div' === $args['style'] ) {
			$tag       = 'div';
			$add_below = 'comment';
		} else {
			$tag       = 'li';
			$add_below = 'div-comment';
		}
		?>
		<<?php echo esc_attr( $tag ); ?> <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ); ?> id="comment-<?php comment_ID(); ?>">
		<div class="comment-body">
		<div class="comment-meta commentmetadata">
			<div class="comment-author vcard">
			<?php echo get_avatar( $comment, 128 ); ?>
			<?php printf( wp_kses_post( '<cite class="fn">%s</cite>', 'willydevtheme' ), get_comment_author_link() ); ?>
			</div>
			<?php if ( '0' === $comment->comment_approved ) : ?>
				<em class="comment-awaiting-moderation"><?php esc_html_e( 'Your comment is awaiting moderation.', 'willydevtheme' ); ?></em>
				<br />
			<?php endif; ?>

			<a href="<?php echo esc_url( htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ); ?>" class="comment-date">
				<?php echo '<time datetime="' . esc_attr( get_comment_date( 'c' ) ) . '">' . esc_html( get_comment_date() ) . '</time>'; ?>
			</a>
		</div>
		<?php if ( 'div' !== $args['style'] ) : ?>
		<div id="div-comment-<?php comment_ID(); ?>" class="comment-content">
		<?php endif; ?>
		<div class="comment-text">
		<?php comment_text(); ?>
		</div>
		<div class="reply">
		<?php
		comment_reply_link(
			array_merge(
				$args,
				array(
					'add_below' => $add_below,
					'depth'     => $depth,
					'max_depth' => $args['max_depth'],
				)
			)
		);
		?>
		<?php edit_comment_link( __( 'Edit', 'willydevtheme' ), '  ', '' ); ?>
		</div>
		</div>
		<?php if ( 'div' !== $args['style'] ) : ?>
		</div>
		<?php endif; ?>
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_primary_navigation' ) ) {
	/**
	 * Display Primary Navigation
	 *
	 * @since  1.0.0
	 * @return void
	 */
	function willydevtheme_primary_navigation() {
		?>
		<nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Primary Navigation', 'willydevtheme' ); ?>">
			<button class="menu-toggle" aria-controls="site-navigation" aria-expanded="false"><span><?php echo esc_html( apply_filters( 'willydevtheme_menu_toggle_text', __( 'Menu', 'willydevtheme' ) ) ); ?></span></button>
			<?php
				wp_nav_menu(
					array(
						'theme_location'  => 'primary',
						'container_class' => 'primary-navigation',
					)
				);

				wp_nav_menu(
					array(
						'theme_location'  => 'handheld',
						'container_class' => 'handheld-navigation',
					)	
				);
			?>
		</nav><!-- #site-navigation -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_secondary_navigation' ) ) {
	/**
	 * Display Secondary Navigation
	 *
	 * @since  1.0.0
	 * @return void
	 */
	function willydevtheme_secondary_navigation() {
		if ( has_nav_menu( 'secondary' ) ) {
			?>
			<nav class="secondary-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Secondary Navigation', 'willydevtheme' ); ?>">
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'secondary',
							'fallback_cb'    => '',
						)
					);
				?>
			</nav><!-- #site-navigation -->
			<?php
		}
	}
}

if ( ! function_exists( 'willydevtheme_sidebar_widgets' ) ) {
	/**
	 * Display main sidebar
	 */
	function willydevtheme_sidebar_widgets() {
		if ( ! is_active_sidebar( 'sidebar' ) ) {
			return;
		}
		?>
		<div id="secondary" class="widget-area" role="complementary">
			<?php dynamic_sidebar( 'sidebar' ); ?>
		</div><!-- #secondary -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_header_widget_region' ) ) {
	/**
	 * Display header widget region
	 *
	 * @since  1.0.0
	 */
	function willydevtheme_header_widget_region() {
		if ( is_active_sidebar( 'header-1' ) ) {
			?>
		<div class="header-widget-region" role="complementary">
			<div class="col-full">
				<?php dynamic_sidebar( 'header-1' ); ?>
			</div>
		</div>
			<?php
		}
	}
}

if ( ! function_exists( 'willydevtheme_footer_widgets' ) ) {
	/**
	 * Display the footer widget regions.
	 *
	 * @since  1.0.0
	 * @return void
	 */
	function willydevtheme_footer_widgets() {
		$rows    = intval( apply_filters( 'willydevtheme_footer_widget_rows', 1 ) );
		$regions = intval( apply_filters( 'willydevtheme_footer_widget_columns', 4 ) );

		for ( $row = 1; $row <= $rows; $row++ ) :

			// Defines the number of active columns in this footer row.
			for ( $region = $regions; 0 < $region; $region-- ) {
				if ( is_active_sidebar( 'footer-' . esc_attr( $region + $regions * ( $row - 1 ) ) ) ) {
					$columns = $region;
					break;
				}
			}

			if ( isset( $columns ) ) :
				?>
				<div class=<?php echo '"footer-widgets row-' . esc_attr( $row ) . ' col-' . esc_attr( $columns ) . ' fix"'; ?>>
				<?php
				for ( $column = 1; $column <= $columns; $column++ ) :
					$footer_n = $column + $regions * ( $row - 1 );

					if ( is_active_sidebar( 'footer-' . esc_attr( $footer_n ) ) ) :
						?>
					<div class="block footer-widget-<?php echo esc_attr( $column ); ?>">
						<?php dynamic_sidebar( 'footer-' . esc_attr( $footer_n ) ); ?>
					</div>
						<?php
					endif;
				endfor;
				?>
			</div><!-- .footer-widgets.row-<?php echo esc_attr( $row ); ?> -->
				<?php
				unset( $columns );
			endif;
		endfor;
	}
}

if ( ! function_exists( 'willydevtheme_site_title_or_logo' ) ) {
	/**
	 * Display the site title or logo
	 *
	 * @since 2.1.0
	 * @param bool $echo Echo the string or return it.
	 * @return string
	 */
	function willydevtheme_site_title_or_logo( $echo = true ) {
		if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {
			$logo = get_custom_logo();
			$html = is_home() ? '<div class="logo">' . $logo . '</div>' : $logo;
		} else {
				$html = '<div class="beta site-title"><a href="' . esc_url( home_url( '/' ) ) . '" rel="home">' . esc_html( get_bloginfo( 'name' ) ) . '</a></div>';

			if ( '' !== get_bloginfo( 'description' ) ) {
				$html .= '<p class="site-description">' . esc_html( get_bloginfo( 'description', 'display' ) ) . '</p>';
			}
		}

		if ( ! $echo ) {
			return $html;
		}

		echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}

if ( ! function_exists( 'willydevtheme_post_thumbnail' ) ) {
	/**
	 * Display post thumbnail
	 *
	 * @var $size thumbnail size. thumbnail|medium|large|full|$custom
	 * @uses has_post_thumbnail()
	 * @uses the_post_thumbnail
	 * @param string $size the post thumbnail size.
	 * @since 1.5.0
	 */
	function willydevtheme_post_thumbnail( $size = 'full' ) {
		if ( has_post_thumbnail() ) {
			if ( ! is_singular() ) {
				printf( '<a href="%1$s">%2$s</a>', esc_url( get_the_permalink() ), get_the_post_thumbnail( $size ) );
			} else {
				the_post_thumbnail( $size );
			}
		}
	}
}

if ( ! function_exists( 'willydevtheme_post_meta' ) ) {
	/**
	 * Display the post meta
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_post_meta() {
		if ( 'post' !== get_post_type() ) {
			return;
		}

		// Posted on.
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( 'c' ) ),
			esc_html( get_the_modified_date() )
		);

		$output_time_string = sprintf( '<a href="%1$s" rel="bookmark">%2$s</a>', esc_url( get_permalink() ), $time_string );

		$posted_on = '
			<span class="posted-on">' .
			/* translators: %s: post date */
			sprintf( __( 'Posted on %s', 'willydevtheme' ), $output_time_string ) .
			'</span>';

		// Author.
		$author = sprintf(
			'<span class="post-author">%1$s <a href="%2$s" class="url fn" rel="author">%3$s</a></span>',
			__( 'by', 'willydevtheme' ),
			esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
			esc_html( get_the_author() )
		);

		// Comments.
		$comments = '';

		if ( ! post_password_required() && ( comments_open() || 0 !== intval( get_comments_number() ) ) ) {
			$comments_number = get_comments_number_text( __( 'Leave a comment', 'willydevtheme' ), __( '1 Comment', 'willydevtheme' ), __( '% Comments', 'willydevtheme' ) );

			$comments = sprintf(
				'<span class="post-comments">&mdash; <a href="%1$s">%2$s</a></span>',
				esc_url( get_comments_link() ),
				$comments_number
			);
		}

		echo wp_kses(
			sprintf( '%1$s %2$s %3$s', $posted_on, $author, $comments ),
			array(
				'span' => array(
					'class' => array(),
				),
				'a'    => array(
					'href'  => array(),
					'title' => array(),
					'rel'   => array(),
				),
				'time' => array(
					'datetime' => array(),
					'class'    => array(),
				),
			)
		);
	}
}

if ( ! function_exists( 'willydevtheme_post_taxonomy' ) ) {
	/**
	 * Display the post taxonomies
	 *
	 * @since 2.4.0
	 */
	function willydevtheme_post_taxonomy() {
		if ( 'post' !== get_post_type() ) {
			return;
		}
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( __( ', ', 'willydevtheme' ) );

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', __( ', ', 'willydevtheme' ) );
		?>

		<aside class="entry-taxonomy">
			<?php if ( $categories_list ) : ?>
			<div class="cat-links">
				<?php echo esc_html( _n( 'Category:', 'Categories:', count( get_the_category() ), 'willydevtheme' ) ); ?> <?php echo wp_kses_post( $categories_list ); ?>
			</div>
			<?php endif; ?>

			<?php if ( $tags_list ) : ?>
			<div class="tags-links">
				<?php echo esc_html( _n( 'Tag:', 'Tags:', count( get_the_tags() ), 'willydevtheme' ) ); ?> <?php echo wp_kses_post( $tags_list ); ?>
			</div>
			<?php endif; ?>
		</aside>

		<?php
	}
}

if ( ! function_exists( 'willydevtheme_skip_links' ) ) {
	/**
	 * Skip links for screen reader
	 *
	 * @since  1.4.1
	 * @return void
	 */
	function willydevtheme_skip_links() {
		?>
		<a class="skip-link screen-reader-text" href="#site-navigation"><?php esc_html_e( 'Skip to navigation', 'willydevtheme' ); ?></a>
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'willydevtheme' ); ?></a>
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_edit_post_link' ) ) {
	/**
	 * Display the edit link
	 *
	 * @since 2.5.0
	 */
	function willydevtheme_edit_post_link() {
		edit_post_link(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Edit <span class="screen-reader-text">%s</span>', 'willydevtheme' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			),
			'<div class="edit-link">',
			'</div>'
		);
	}
}

if ( ! function_exists( 'willydevtheme_post_header' ) ) {
	/**
	 * Display the post header with a link to the single post
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_post_header() {

			if ( is_single() ) {
				willydevtheme_single_post_header();
			} elseif ( is_page() ) {
				willydevtheme_page_header();
			} else {
				willydevtheme_post_excerpt_header();
			}

	}
}

if ( ! function_exists( 'willydevtheme_post_content' ) ) {

	/**
	 * Display the post content with a link to the single post
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_post_content() {

		if ( is_single() ) {
			willydevtheme_single_post_content();
		} elseif ( is_page() ) {
			willydevtheme_page_content();
		} else {
			willydevtheme_post_excerpt_content();
		}

	}
}

if ( ! function_exists( 'willydevtheme_the_excerpt' ) ) {
	/**
	 * Display the excerpt if exist
	 *
	 * Muestra el extracto personalizado solo si este existe, esto evita que se muestre el contenido recortado en caso de que no exista el extracto por la funcionalidad por defecto de la función the_excerpt.
	 */
	function willydevtheme_the_excerpt() {
		if ( has_excerpt() ) {
			the_excerpt();
		}
	}
}

if ( ! function_exists( 'willydevtheme_frontpage_header' ) ) {
	/**
	 * Display the frontpage header with the featured image
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_frontpage_header() {
		?>
		<header class="entry-header">
			
			<?php
			/**
			 * @hooked  - 10 
			 */
			do_action( 'willydevtheme_frontpage_header_top' );
			?>

			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

			<?php
			/**
			 * @hook willydevtheme_the_excerpt
			 */
			do_action( 'willydevtheme_frontpage_header_bottom' );
			?>
		</header><!-- .entry-header -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_frontpage_content' ) ) {
	/**
	 * Display frontpage content
	 * Hooked into the `frontpage` action in the frontpage template
	 *
	 * @since  1.0.0
	 * @return  void
	 */
	function willydevtheme_frontpage_content() {
		?>
		<article class="entry-content">

			<?php
			/**
			 * @hooked  
			 */
			do_action( 'willydevtheme_frontpage_content_top' );
			?>

 			<?php the_content(); ?>

			 <?php
			/**
			 * @hooked 
			 */
			do_action( 'willydevtheme_frontpage_content_bottom' );
			?>

		</article>
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_homepage_header' ) ) {
	/**
	 * Display the page header without the featured image
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_homepage_header() {
		$page_id = get_queried_object_id();
		$title = get_the_title( $page_id );
		$page = get_query_var( 'paged' );

		echo '<header class="homepage-header">';

		/**
		 * @hooked 
		 */
		do_action( 'willydevtheme_homepage_header_top' );

		if ( ! $page ) {
			$header_content = sprintf( '<h1 class="homepage-title">%s</h1>', esc_html( $title ) );
		} else {
				$header_content = sprintf( '<h1 class="homepage-title">%1$s: %2$s %3$s</h1>', esc_html( $title ), __( 'Page', 'willydevtheme' ), $page );
			}

			echo wp_kses_post( $header_content );

		/**
		 * @hooked 
		 */
		do_action( 'willydevtheme_homepage_header_bottom' );

		echo '</header>';
	}
}

if ( ! function_exists( 'willydevtheme_homepage_header_hero' ) ) {
	/**
	 * Display header hero if image featured that defined
	 */
	function willydevtheme_homepage_header_hero() {
		if ( ! is_home() ) {
			return;
		}
		$page_id = get_queried_object_id();
		$title = get_the_title( $page_id );
		$page =  get_query_var( 'paged' );
		$url_image_featured = get_the_post_thumbnail_url( $page_id, 'full' ) ?? '';
		$class_header_hero = $url_image_featured ? 'header-hero' : '';
		$class_header_hero_title = $url_image_featured ? 'header-hero__title' : 'header-title';

		echo '<header class="homepage-header">';

		/**
		 * 
		 */
		do_action( 'willydevtheme_homepage_header_hero_top' );

		if ( ! $page ) {
			$header_content = sprintf( '<div class="%1$s" style="background-image: url(%2$s)">', esc_attr( $class_header_hero ), esc_url( $url_image_featured ) );
			if ( $url_image_featured ) {
				$header_content .= '<div class="header-hero__overlay"></div>';
			}
			$header_content .= sprintf( '<h1 class="%1$s">%2$s</h1>', esc_attr( $class_header_hero_title ), esc_html( $title ) );
			$header_content .= '</div>';
		} else {
				$header_content = sprintf( '<h1 class="homepage-title">%1$s: %2$s %3$s</h1>', esc_html( $title ), __( 'Page', 'willydevtheme' ), $page );
			}

		echo wp_kses_post( $header_content );

		/**
			* 
			*/
		do_action( 'willydevtheme_homepage_header_hero_bottom' );
			
		echo '</header>';
	}
}

if ( ! function_exists( 'willydevtheme_homepage_description' ) ) {
	/**
	 * Muestra el extracto como una descripción en la pagina del blog
	 */
	function willydevtheme_homepage_description() {
		if ( ! is_home() ) {
			return;
		}
		$page = get_query_var( 'paged' );
		$page_id = get_queried_object_id();

		if ( has_excerpt( $page_id ) && ! $page) {
			echo sprintf( '<div class="homepage-description">%s</div>', esc_html( get_the_excerpt( $page_id ) ) );
		}
	}
}

if ( ! function_exists( 'willydevtheme_single_post_header' ) ) {
	/**
	 * Display the single post header
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_single_post_header() {

		echo '<header class="entry-header">';

		/**
		 * @hooked 
		 */
		do_action( 'willydevtheme_single_post_header_top' );

		the_title( '<h1 class="entry-title">', '</h1>' );

		/**
		 * @hooked willydevtheme_post_taxonomy - 10
		 * @hooked willydevtheme_post_share (pendiente)
		 * @hooked willydevtheme_post_thumbnail - 10
		 * @hooked willydevtheme_post_excerpt - 10
		 * @hooked willydevtheme_post_meta - 10
		 */
		do_action( 'willydevtheme_single_post_header_bottom' );
	
		echo '</header>';
	}
}

if ( ! function_exists( 'willydevtheme_single_post_content' ) ) {
	/**
	 * Display the post content
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_single_post_content() {
		?>

		<div class="entry-content">

			<?php
			/**
		 	* @hooked
		 	*/
			do_action( 'willydevtheme_single_post_content_top' );
		
			the_content();

			/**
			 * @hooked
			 */
			do_action( 'willydevtheme_single_post_content_bottom' );
			?>

		</div><!-- .entry-content -->

		<?php
	}
}

if ( ! function_exists( 'willydevtheme_page_header' ) ) {
	/**
	 * Display the page header
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_page_header() {

		echo '<header class="entry-header">';

		/**
		 * @hooked willydevtheme_post_thumbnail() - 10
		 */
		do_action( 'willydevtheme_page_header_top' );
		
		the_title( '<h1 class="entry-title">', '</h1>' );
		
		/**
		 */
		do_action( 'willydevtheme_page_header_bottom' );
		?>
		</header><!-- .entry-header -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_page_content' ) ) {
	/**
	 * Display the post content
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_page_content() {
		?>
		<div class="entry-content">
			<?php
			/**
		 	* @hooked
		 	*/
			do_action( 'willydevtheme_page_content_top' );

			the_content();

			/**
			 * @hooked
			 */
			do_action( 'willydevtheme_page_content_bottom' );
			?>
		</div><!-- .entry-content -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_post_excerpt_header' ) ) {
	/**
	 * Display the post header with a link to the single post
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_post_excerpt_header() {

		echo '<header class="entry-header">';
		/**
		 * Functions hooked in to willydevtheme_post_excerpt_header_top action.
		 *
		 * @hooked willydevtheme_post_thumbnail - 10
		 */
		do_action( 'willydevtheme_post_excerpt_header_top' );

		the_title( sprintf( '<h2 class="alpha entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );

		/**
		 * Functions hooked in to willydevtheme_post_excerpt_header_bottom action.
		 *
		 * @hooked willydevtheme_post_taxonomy - 10
		 */
		do_action( 'willydevtheme_post_excerpt_header_bottom' );

		echo '</header>';
	}
}

if ( ! function_exists( 'willydevtheme_post_excerpt_content' ) ) {
	/**
	 * Display the post excerpt content
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_post_excerpt_content() {
		?>
		<div class="entry-content">
		<?php

		/**
		 * Functions hooked in to willydevtheme_post_excerpt_content_top action.
		 *
		 */
		do_action( 'willydevtheme_post_excerpt_content_top' );

		the_excerpt();

		/**
		 * @hooked
		 */
		do_action( 'willydevtheme_post_excerpt_content_bottom' );
		?>
		</div><!-- .entry-content -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_archive_header' ) ) {
	/**
	 * Display the header and description of archive pages
	 */
	function willydevtheme_archive_header() {
		if ( ! is_archive() ) {
			return;
		}
		?>
		<header class="archive-header">
			<?php
			/**
			 * @hooked
			 */
			do_action( 'willydevtheme_archive_header_top' );

			the_archive_title( '<h1 class="page-title">', '</h1>' );

			/**
			 * @hooked
			 */
			do_action( 'willydevtheme_archive_header_after_title' );

			the_archive_description( '<div class="taxonomy-description">', '</div>' );

			/**
			 * @hooked
			 */
			do_action( 'willydevtheme_archive_header_bottom' );
			?>
		</header>
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_post_nav' ) ) {
	/**
	 * Display navigation to next/previous post when applicable.
	 */
	function willydevtheme_post_nav() {
		if ( ! is_single() ) {
			return;
		}

		$args = array(
			'next_text' => '<span class="screen-reader-text">' . esc_html__( 'Next post:', 'willydevtheme' ) . ' </span>%title',
			'prev_text' => '<span class="screen-reader-text">' . esc_html__( 'Previous post:', 'willydevtheme' ) . ' </span>%title',
		);
		the_post_navigation( $args );
	}
}

if ( ! function_exists( 'willydevtheme_paging_nav' ) ) {
	/**
	 * Display navigation to next/previous set of posts when applicable.
	 */
	function willydevtheme_paging_nav() {
		global $wp_query;

		$args = array(
			'type'      => 'list',
			'next_text' => _x( 'Next', 'Next post', 'willydevtheme' ),
			'prev_text' => _x( 'Previous', 'Previous post', 'willydevtheme' ),
		);

		the_posts_pagination( $args );
	}
}

if ( ! function_exists( 'willydevtheme_the_html_classes' ) ) {
	/**
	 * Template tag HTML classes
	 */
	function willydevtheme_the_html_classes() {
		$classes = apply_filters( 'the_html_classes', '');
		if ( ! $classes ) {
			return;
		}
		echo 'class="' . ( $classes ) . '"';
	}
}

if ( ! function_exists( 'willydevtheme_credit' ) ) {
	/**
	 * Display the theme credit
	 *
	 * @since  1.0.0
	 * @return void
	 */
	function willydevtheme_credit() {
		$links_output = '';

		if ( apply_filters( 'willydevtheme_credit_link', true ) ) {
			if ( willydevtheme_is_woocommerce_activated() ) {
				$links_output .= '<a href="https://woocommerce.com" target="_blank" title="' . esc_attr__( 'WooCommerce - The Best eCommerce Platform for WordPress', 'willydevtheme' ) . '" rel="noreferrer">' . esc_html__( 'Built with willydevtheme &amp; WooCommerce', 'willydevtheme' ) . '</a>.';
			} else {
				$links_output .= '<a href="https://woocommerce.com/willydevtheme/" target="_blank" title="' . esc_attr__( 'willydevtheme -  The perfect platform for your next WooCommerce project.', 'willydevtheme' ) . '" rel="noreferrer">' . esc_html__( 'Built with willydevtheme', 'willydevtheme' ) . '</a>.';
			}
		}

		if ( apply_filters( 'willydevtheme_privacy_policy_link', true ) && function_exists( 'the_privacy_policy_link' ) ) {
			$separator    = '<span role="separator" aria-hidden="true"></span>';
			$links_output = get_the_privacy_policy_link( '', ( ! empty( $links_output ) ? $separator : '' ) ) . $links_output;
		}

		$links_output = apply_filters( 'willydevtheme_credit_links_output', $links_output );
		?>
		<div class="site-info">
			<?php echo esc_html( apply_filters( 'willydevtheme_copyright_text', $content = '&copy; ' . get_bloginfo( 'name' ) . ' ' . gmdate( 'Y' ) ) ); ?>

			<?php if ( ! empty( $links_output ) ) { ?>
				<br />
				<?php echo wp_kses_post( $links_output ); ?>
			<?php } ?>
		</div><!-- .site-info -->
		<?php
	}
}