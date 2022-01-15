<?php
/**
 * willydevtheme template functions.
 *
 * @package willydevtheme
 */

if ( ! function_exists( 'willydevtheme_display_comments' ) ) {
	/**
	 * willydevtheme display comments
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
	 * willydevtheme comment template
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
			$html = is_home() ? '<h1 class="logo">' . $logo . '</h1>' : $logo;
		} else {
			$tag = is_home() ? 'h1' : 'div';

			$html = '<' . esc_attr( $tag ) . ' class="beta site-title"><a href="' . esc_url( home_url( '/' ) ) . '" rel="home">' . esc_html( get_bloginfo( 'name' ) ) . '</a></' . esc_attr( $tag ) . '>';

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
			the_post_thumbnail( $size );
		}
	}
}

if ( ! function_exists( 'willydevtheme_banner_hero' ) ) {
	/**
	 * Display banner hero whit featured image
	 */
	function willydevtheme_banner_hero() {
		?>
		<div class="banner-hero">
			<picture>
				<?php willydevtheme_post_thumbnail(); ?>
			</picture>
			<div class="overlay"></div>
			<h2>Lorem Ipsum</h2>
			<h3>Subtitle lorem ipsum</h3>
			<a href="#" class="link button">Button now</a>
		</div>
		<?php
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
		?>
		<header class="entry-header">
		<?php
		/**
		 * Functions hooked in to willydevtheme_post_header_top action.
		 */
		do_action( 'willydevtheme_post_header_top' );

		if ( is_single() ) {
			the_title( '<h1 class="entry-title">', '</h1>' );
		} else {
			the_title( sprintf( '<h2 class="alpha entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
		}

		/**
		 * Functions hooked in to willydevtheme_post_header_bottom action.
		 *
		 * @hooked willydevtheme_post_taxonomy - 10
		 * 
		 * @hooked willydevtheme_post_thumbnail - 10
		 * 
		 * @hooked the_excerpt - 10
		 * 
		 * @hooked willydevtheme_post_meta - 10
		 * 
		 */
		do_action( 'willydevtheme_post_header_bottom' );
		?>
		</header><!-- .entry-header -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_post_content' ) ) {
	/**
	 * Display the post content with a link to the single post
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_post_content() {
		?>
		<div class="entry-content">

		<?php

		/**
		 * Functions hooked in to willydevtheme_post_content_before action.
		 *
		 */
		do_action( 'willydevtheme_post_content_top' );

		if ( is_single() ) {

			the_content();

			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . __( 'Pages:', 'willydevtheme' ),
					'after'  => '</div>',
				)
			);

		} else {

			the_excerpt();
			echo '<span class="screen-reader-text">' . get_the_title() . '</span>';

		}
		
		/**
		 * @hooked
		 */
		do_action( 'willydevtheme_post_content_bottom' );
		?>

		</div><!-- .entry-content -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_post_excerpt' ) ) {
	/**
	 * Display the excerpt if exist
	 */
	function willydevtheme_post_excerpt() {
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
			 * @hooked willydevtheme_banner_hero - 10 
			 */
			do_action( 'willydevtheme_frontpage_header_top' );
			?>

			<div class="content-header">

				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
			
				<?php 
				/**
				 * @hooked willydevtheme_post_excerpt - 10
				 */
				do_action('willydevtheme_frontpage_content_header'); 
				?>
			
			</div>

			<?php
			/**
			 * @hook 
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
			 * @hook 
			 */
			do_action( 'willydevtheme_frontpage_content_top' );
		
 			the_content(); 

			/**
			 * @hook 
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
		$page =  get_query_var( 'paged' );
		?>
		<header class="homepage-header">

			<?php 
			if ( ! $page ) {
				?>
				<div class="site-banner">

					<?php echo get_the_post_thumbnail( $page_id, 'full' ); ?>

				</div>

				<h1 class="homepage-title"><?php echo esc_html( $title ); ?></h1>

				<div class="homepage-excerpt">

					<?php echo esc_html( get_the_excerpt( $page_id ) ); ?>

				</div>
				<?php 
			} else {
				echo sprintf( '<h1 class="homepage-title">%1$s: %2$s %3$s</h1>', esc_html( $title ), __( 'Page', 'willydevtheme' ), $page );
			}
			?>
		</header>
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_homepage_content' ) ) {
	/**
	 * Display homepage content
	 * Hooked into the `homepage` action in the homepage template
	 *
	 * @since  1.0.0
	 * @return  void
	 */
	function willydevtheme_homepage_content() {
		?>
		<div class="homepage-content">
			
			<?php 
			echo wp_kses_post( get_the_content( null, false, get_queried_object_id() ), );  
			?>
			
		</div>
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_single_post_header' ) ) {
	/**
	 * Display the single post header
	 *
	 * @since 1.0.0
	 */
	function willydevtheme_single_post_header() {
		?>
		<header class="entry-header">

			<?php
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
			?>

		</header><!-- .entry-header -->
		<?php

		

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
		?>
		<header class="entry-header">

			<?php
			/**
			 * @hooked willydevtheme_post_thumbnail() - 10
			 */
			do_action( 'willydevtheme_page_header_top' );
		
			the_title( '<h1 class="entry-title">', '</h1>' ); 
		
			/**
			 * 
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
			<?php the_content(); ?>
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
		?>

		<header class="entry-header">

		<?php
		/**
		 * Functions hooked in to willydevtheme_post_excerpt_header_top action.
		 *
		 * @hooked willydevtheme_post_thumbnail - 10
		 *
		 * @hooked willydevtheme_post_taxonomy - 10
		 * 
		 */
		do_action( 'willydevtheme_post_excerpt_header_top' );

		the_title( sprintf( '<h2 class="alpha entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );

		/**
		 * Functions hooked in to willydevtheme_post_excerpt_header_bottom
		 * 
		 * 
		 * @hooked willydevtheme_post_meta - 10
		 */
		do_action( 'willydevtheme_post_excerpt_header_bottom' );
		?>
		</header><!-- .entry-header -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_post_excerpt_content' ) ) {
	/**
	 * Display the post content with a link to the single post
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

		if ( is_single() ) {
			the_content();
		} else {
			the_excerpt();
			echo '<span class="screen-reader-text">' . get_the_title() . '</span>';
		}
		
		/**
		 * @hooked willydevtheme_post_meta - 10
		 */
		do_action( 'willydevtheme_post_excerpt_content_bottom' );
		
		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'willydevtheme' ),
				'after'  => '</div>',
			)
		);
		?>
		</div><!-- .entry-content -->
		<?php
	}
}

if ( ! function_exists( 'willydevtheme_archive_header' ) ) {
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