<?php

function interactive_image_pixelation()
{
    if (!function_exists('register_block_type')) {
        return;
    }
    wp_register_script(
        'bloc-image-pixelation',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );
    register_block_type('fellyph/tutorial-01', array(
        'editor_script' => 'bloc-image-pixelation',
    ));
}
add_action('init', 'interactive_image_pixelation');