<?php

function short_scripts_mosaico()
{
    wp_register_script("short-mosaico-script-p5", "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js", array(), "1.0", false);
    wp_register_script("short-mosaico-script", plugins_url("../public/js/main.js", __FILE__), array(), "1.0", false);
    wp_register_style("short-mosaico-style", plugins_url("../public/css/style.css", __FILE__), array(), "1.0", "all");
}
add_action('init', 'short_scripts_mosaico');

add_shortcode('mosaico', 'short_mosaico');

function short_mosaico($atributes = [], $content = null)
{
    $html = file_get_contents(__DIR__ . "/../public/html/short.html");
    wp_enqueue_script("short-mosaico-script-p5");
    wp_enqueue_script("short-mosaico-script");
    wp_enqueue_style("short-mosaico-style");
    return $html;
}
