## Templates files

- index.php

      body.body_class()
        do_action('body_open')
        do_action('brandketings_before_site')
        div#page.site
          div.message-bar
          do_action('brandketings_before_header')
          header#masthead.site-header
            button.menu-toggle[hidden]
            div.site-branding
            div.search-form[role="search"]
            div.header-links
            do_action('brandketings_header')
          nav#primary-navigation.site-navigation[role="navigation"]
          div#navigation-panel.navigation-panel
          do_action('brandketings_before_content')
          div#content.site-content
            div#primary.content-area
              main#main.site-main[role="main"]
                if have posts
                do_action('brandketings_before_loop')
                // loop
                article#post-${ the_ID() }.post_class()
                  do_action('brandketings_loop_top')
                  header.entry-header
                  div.entry-content
                  footer.entry-footer
                  do_action('brandketings_loop')
                  do_action(brandketings_loop_bottom')
                do_action('brandketings_after_loop')
            div#secondary.widget-area
              aside#sidebar.site-sidebar[role="complementary"]
          do_action('brandketings_before_footer')
          footer#footer.site-footer[role="contentinfo"]
            do_action('brandketings_footer')
          do_action('brandketings_after_footer')

- single.php

      body.body_class()
        do_action('body_open')
        do_action('brandketings_before_site')
        div#page.site
          div.message-bar
          do_action('brandketings_before_header')
          header#masthead.site-header
            button.menu-toggle[hidden]
            div.site-branding
            div.search-form[role="search"]
            div.header-links
            do_action('brandketings_header')
          nav#primary-navigation.site-navigation[role="navigation"]
          div#navigation-panel.navigation-panel
          do_action('brandketings_before_content')
          div#content.site-content
            div#primary.content-area
              main#main.site-main[role="main"]
                if have posts
                do_action('brandketings_before_loop')
                // loop
                article#post-${ the_ID() }.post_class()
                  do_action('brandketings_single_loop_top')
                  header.entry-header
                  div.entry-content
                  footer.entry-footer
                  do_action('brandketings_single_loop')
                  do_action('brandketings_single_loop_bottom')
                do_action('brandketings_after_loop')
            div#secondary.widget-area
              aside#sidebar.site-sidebar[role="complementary"]
          do_action('brandketings_before_footer')
          footer#footer.site-footer[role="contentinfo"]
            do_action('brandketings_footer')
          do_action('brandketings_after_footer')

- page.php

      body.body_class()
        do_action('body_open')
        do_action('brandketings_before_site')
        div#page.site
          div.message-bar
          do_action('brandketings_before_header')
          header#masthead.site-header
            button.menu-toggle[hidden]
            div.site-branding
            div.search-form[role="search"]
            div.header-links
            do_action('brandketings_header')
          nav#primary-navigation.site-navigation[role="navigation"]
          div#navigation-panel.navigation-panel
          do_action('brandketings_before_content')
          div#content.site-content
            div#primary.content-area
              main#main.site-main[role="main"]
                if have posts
                do_action('brandketings_before_loop')
                // loop
                article#page-${ the_ID() }.post_class()
                  do_action('brandketings_page_loop_top')
                  header.entry-header
                  div.entry-content
                  footer.entry-footer
                  do_action('brandketings_page_loop')
                  do_action('brandketings_page_loop_bottom')
                do_action('brandketings_after_loop')
            div#secondary.widget-area
              aside#sidebar.site-sidebar[role="complementary"]
          do_action('brandketings_before_footer')
          footer#footer.site-footer[role="contentinfo"]
            do_action('brandketings_footer')
          do_action('brandketings_after_footer')

- frontpage.php

      body.body_class()
        do_action('body_open')
        do_action('brandketings_before_site')
        div#page.site
          div.message-bar
          do_action('brandketings_before_header')
          header#masthead.site-header
            button.menu-toggle[hidden]
            div.site-branding
            div.search-form[role="search"]
            div.header-links
            do_action('brandketings_header')
          nav#primary-navigation.site-navigation[role="navigation"]
          div#navigation-panel.navigation-panel
          do_action('brandketings_before_content')
          div#content.site-content
            div#primary.content-area
              main#main.site-main[role="main"]
                if have posts
                do_action('brandketings_before_loop')
                // loop
                div#page-${ the_ID() }.post_class()
                  do_action('brandketings_frontpage_loop_top')
                  header.entry-header
                  article.entry-content
                  footer.entry-footer
                  do_action('brandketings_frontpage_loop')
                  do_action('brandketings_frontpage_loop_bottom')
                do_action('brandketings_after_loop)
            div#secondary.widget-area
              aside#sidebar.site-sidebar[role="complementary"]
          do_action('brandketings_before_footer')
          footer#footer.site-footer[role="contentinfo"]
            do_action('brandketings_footer')
          do_action('brandketings_after_footer')

- homepage.php

      body.body_class()
        do_action('body_open')
        do_action('brandketings_before_site')
        div#page.site
          div.message-bar
          do_action('brandketings_before_header')
          header#masthead.site-header
            button.menu-toggle[hidden]
            div.site-branding
            div.search-form[role="search"]
            div.header-links
            do_action('brandketings_header')
          nav#primary-navigation.site-navigation[role="navigation"]
          div#navigation-panel.navigation-panel
          do_action('brandketings_before_content')
          div#content.site-content
            div#primary.content-area
              main#main.site-main[role="main"]
                if have posts
                header.homepage-header
                do_action('brandketings_homepage_before_loop')
                // loop require excerpt standard default
                article#post-${ the_ID() }.post_class()
                  do_action('brandketings_post_loop_top')
                  header.entry-header
                  div.entry-content
                  footer.entry-footer
                  do_action('brandketings_post_loop')
                  do_action('brandketings_post_loop_bottom')
                do_action('brandketings_homepage_after_loop')
            div#secondary.widget-area
              aside#sidebar.site-sidebar[role="complementary"]
          do_action('brandketings_before_footer')
          footer#footer.site-footer[role="contentinfo"]
            do_action('brandketings_footer')
          do_action('brandketings_after_footer')

- archive.php

      body.body_class()
        do_action('body_open')
        do_action('brandketings_before_site')
        div#page.site
          div.message-bar
          do_action('brandketings_before_header')
          header#masthead.site-header
            button.menu-toggle[hidden]
            div.site-branding
            div.search-form[role="search"]
            div.header-links
            do_action('brandketings_header')
          nav#primary-navigation.site-navigation[role="navigation"]
          div#navigation-panel.navigation-panel
          do_action('brandketings_before_content')
          div#content.site-content
            div#primary.content-area
              main#main.site-main[role="main"]
                if have posts
                do_action('brandketings_archive_header_before')
                header.archive-header
                do_action('brandketings_before_loop')
                // loop
                article#page-${ the_ID() }.post_class()
                  do_action('brandketings_homepage_loop_top')
                  header.entry-header
                  div.entry-content
                  footer.entry-footer
                  do_action('brandketings_homepage_loop')
                  do_action('brandketings_homepage_loop_bottom')
                do_action('brandketings_after_loop')
            div#secondary.widget-area
              aside#sidebar.site-sidebar[role="complementary"]
          do_action('brandketings_before_footer')
          footer#footer.site-footer[role="contentinfo"]
            do_action('brandketings_footer')
          do_action('brandketings_after_footer')
