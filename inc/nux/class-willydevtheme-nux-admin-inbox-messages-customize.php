<?php
/**
 * willydevtheme NUX Admin Inbox Messages.
 *
 * @package  willydevtheme
 * @since    3.0.0
 */

use Automattic\WooCommerce\Admin\Notes\Note;
use Automattic\WooCommerce\Admin\Notes\NoteTraits;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'willydevtheme_NUX_Admin_Inbox_Messages_Customize' ) ) :
	/**
	 * The initial willydevtheme inbox Message.
	 */
	class willydevtheme_NUX_Admin_Inbox_Messages_Customize {

		use NoteTraits;

		/**
		 * Name of the note for use in the database.
		 */
		const NOTE_NAME = 'willydevtheme-customize';

		/**
		 * Get the note.
		 *
		 * @return Note
		 */
		public static function get_note() {
			$note = new Note();
			$note->set_title( __( 'Design your store with willydevtheme 🎨', 'willydevtheme' ) );
			$note->set_content( __( 'Visit the willydevtheme settings page to start setup and customization of your shop.', 'willydevtheme' ) );
			$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
			$note->set_name( self::NOTE_NAME );
			$note->set_content_data( (object) array() );
			$note->set_source( 'willydevtheme' );
			$note->add_action(
				'customize-store-with-willydevtheme',
				__( 'Let\'s go!', 'willydevtheme' ),
				admin_url( 'themes.php?page=willydevtheme-welcome' ),
				Note::E_WC_ADMIN_NOTE_ACTIONED,
				true
			);
			return $note;
		}
	}
endif;
