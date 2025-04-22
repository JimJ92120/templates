<?php
/**
 * Plugin Name: Admin App
 *
 */

function my_admin_menu() {
    add_menu_page(
        __( 'Admin App', 'gutenberg' ),
        __( 'Admin App', 'gutenberg' ),
        'manage_options',
        'admin-app',
        function () {
            echo '
            <h2>Pages</h2>
            <div id="admin-app"></div>
        ';
        },
        'dashicons-schedule',
        3
    );
}

add_action( 'admin_menu', 'my_admin_menu' );

function load_custom_wp_admin_scripts( $hook ) {
    if ( 'toplevel_page_admin-app' !== $hook ) {
        return;
    }

    $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    foreach ( $asset_file['dependencies'] as $style ) {
        wp_enqueue_style( $style );
    }

    wp_register_script(
        'admin-app',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    wp_enqueue_script( 'admin-app' );

    wp_register_style(
        'admin-app',
        plugins_url( 'build/style-index.css', __FILE__ ),
        array(),
        $asset_file['version']
    );
    wp_enqueue_style( 'admin-app' );
}

add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_scripts' );
