<?php
/**
 * Plugin Name: Custom Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_todo_list_block_init() {
	// breaks dynamic blocks?
	// if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
	// 	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	// 	return;
	// }

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		$args = array();

		// bind render_callback for dynamic block
		// !!! `render`: `file:./render.php` not working
		if ( "last-post-link" === $block_type ) {
			require_once  __DIR__ . "/build/{$block_type}/render.php";

			$args = array(
				"render_callback" => "last_post_link_block_render_callback",
			);

		} 

		register_block_type( __DIR__ . "/build/{$block_type}", $args );
	}
}
add_action( 'init', 'create_block_todo_list_block_init' );
