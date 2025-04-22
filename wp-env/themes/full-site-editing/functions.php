<?php
/*
Theme Name: Full Site Editing
*/

function _theme_style() {
	wp_enqueue_style(
		'theme-style',
		get_stylesheet_uri(),
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', '_theme_style' );

if ( ! function_exists( '_theme_setup' ) ) {
	function _theme_setup() {
            add_theme_support( 'wp-block-styles' );
        }
}
add_action( 'after_setup_theme', '_theme_setup' );
