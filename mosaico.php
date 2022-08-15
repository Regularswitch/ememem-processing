<?php

/**
 * Plugin Name: Mosaico
 * Description: Um plugin produzido por Regulars Witch que possibilita a interação de imagem através de pixels 
 * Version: 1.0.0
 * Requires at least: 5.2
 * Requires PHP: 7.2
 * Author: Regulars Witch
 * Author URI: https://regularswitch.com
 */

defined('ABSPATH') or die('não perturbe');

require_once __DIR__ . "/includes/block.php";
require_once __DIR__ . "/includes/shortcode.php";
require_once __DIR__ . "/includes/PostMosaico.php";
require_once __DIR__ . "/includes/MetaBoxMosaico.php";


new PostMosaico();
new MetaBoxMosaico();
