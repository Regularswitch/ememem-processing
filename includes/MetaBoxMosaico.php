<?php
class MetaBoxMosaico
{
    public function __construct()
    {
        add_action('add_meta_boxes', array($this, 'add_meta_box'));
        add_action('save_post',      array($this, 'save'));
    }
    public function add_meta_box($post_type)
    {
        $post_types = array('post_mosaico');
        if (in_array($post_type, $post_types)) {
            add_meta_box(
                'meta_box_mosaico',
                'Informações adicionais',
                array($this, 'render_meta_box_content'),
                $post_type,
                'advanced',
                'high'
            );
        }
    }
    public function save($post_id)
    {
        $link = $_POST['mosaico_link'] ?? "";
        $link = sanitize_text_field($link);        
        update_post_meta($post_id, 'mosaico_link', $link);
    }
    public function render_meta_box_content($post)
    {  
        $value = get_post_meta($post->ID, 'mosaico_link', true);
        echo "<label for=\"mosaico_link\">Link</label> <br>";
        echo "<input type=\"url\" id=\"mosaico_link\" name=\"mosaico_link\" value=\"". esc_attr($value) ."\" >";
    }
}