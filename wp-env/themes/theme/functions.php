<?php
/*
Theme Name: Theme

Text Domain: theme
*/

function Theme_theme_style() {
	wp_enqueue_style(
		'theme-style',
		get_stylesheet_uri(),
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'Theme_theme_style' );

if ( ! function_exists( 'Theme_theme_setup' ) ) {
	function Theme_theme_setup() {
            add_theme_support( 'wp-block-styles' );
        }
}
add_action( 'after_setup_theme', 'Theme_theme_setup' );