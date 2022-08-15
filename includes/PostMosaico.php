<?php

class PostMosaico
{
    public function __construct()
    {
        add_action('init', [$this, 'create'], 0);
    }

    public function labels()
    {
        return array(
            'name'                  => "Mosaico",
            'singular_name'         => "Mosaico",
            'menu_name'             => "Mosaico",
            'name_admin_bar'        => "Mosaico",            
            'archives'              => __('Item Archives', 'text_domain'),
            'attributes'            => __('Item Attributes', 'text_domain'),
            'parent_item_colon'     => __('Parent Item:', 'text_domain'),
            'all_items'             => __('Todos', 'text_domain'),
            'add_new_item'          => __('Adicionar', 'text_domain'),
            'add_new'               => __('Adicionar', 'text_domain'),
            'new_item'              => __('Novo', 'text_domain'),
            'edit_item'             => __('Editar', 'text_domain'),
            'update_item'           => __('Atualizar', 'text_domain'),
        );
    }

    public function create()
    {
        $args = array(
            'label'                 => "Mosaico",
            'menu_icon'             => "dashicons-art",
            'description'           => "One page",
            'labels'                => $this->labels(),
            'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields'. 'slug' ),
            'taxonomies'            => array(),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'capability_type'       => 'page',
        );
        register_post_type('post_mosaico', $args);
    }
}
