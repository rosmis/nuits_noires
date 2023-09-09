<?php

//Theme Support

function skilder_theme_support() {
    add_theme_support('post-thumbnails');

}

add_action('after_setup_theme', 'skilder_theme_support');

//Enqueue Styles

function NuitsNoires_register_styles(){
    wp_enqueue_style('style', get_template_directory_uri() . '/dist/dist/app.css', [], 1, 'all');
}

add_action( 'wp_enqueue_scripts', 'NuitsNoires_register_styles');

//Enqueue Scripts

function NuitsNoires_register_scripts(){
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', [], 1, true);
    // wp_enqueue_script('easyMorph', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js', [], 1, true);
    wp_enqueue_script('easyMorph', 'https://assets.codepen.io/16327/MorphSVGPlugin3.min.js', [], 1, true);
    wp_enqueue_script('scrollTrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', [], 1, true);
    wp_enqueue_script('navbar', get_template_directory_uri() . '/src/js/navbar.js', [], 1, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/src/js/main.js', [], 1, true);
    
}

add_action( 'wp_enqueue_scripts', 'NuitsNoires_register_scripts');

function load_js_assets() {
    global $wp;

    // Get the request variables
    $query_vars = $wp->query_vars;

    if( is_page(13) ) {
        wp_enqueue_script('about', get_template_directory_uri() . '/src/js/about.js', [], 1, true);
    }

    if( is_page(30) ) {
        wp_enqueue_script('scrollTo', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js', [], 1, true);
        wp_enqueue_script('work', get_template_directory_uri() . '/src/js/work.js', [], 1, true);
    }

    if( is_front_page() ) {
        wp_enqueue_script('home', get_template_directory_uri() . '/src/js/gsap.js', [], 1, true);
    }

    if (is_post_type_archive('realisations')) {
        wp_enqueue_script('realisations', get_template_directory_uri() . '/src/js/realisations.js', [], 1, true);
        return;
    }


    if (isset($query_vars['category_name']) && $query_vars['category_name'] === 'culturel') {
        if(is_singular('realisations')) {
            // Get the post ID of the current post
            $post_id = get_the_ID();

            wp_enqueue_script('fontawesome', 'https://kit.fontawesome.com/90b68b7d84.js', [], 1, true);
            wp_enqueue_script('WaveSurfer', 'https://unpkg.com/wavesurfer.js@7', [], 1, true);
            wp_enqueue_script('audio', get_template_directory_uri() . '/src/js/audio.js', [], 1, true);
            wp_enqueue_script('realisation', get_template_directory_uri() . '/src/js/realisation.js', [], 1, true);

            // Pass the post ID to the realisation script
            wp_localize_script('audio', 'post', array(
                'id' => $post_id,
            ));
            return;
        };

        wp_enqueue_script('scrollTo', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js', [], 1, true);
        wp_enqueue_script('work', get_template_directory_uri() . '/src/js/work.js', [], 1, true);
    }
}

add_action('wp_enqueue_scripts', 'load_js_assets');

// ADD CUSTOM REALISATIONS POST TYPE

function vx_soon_training_post_link( $post_link, $id = 0 ) {
    $post = get_post( $id );
    if ( is_object( $post ) ) {
        $terms = wp_get_object_terms( $post->ID, 'category' );
        if ( $terms ) {
            return str_replace( '%category%', $terms[0]->slug, $post_link );
        }
    }

    return $post_link;
}

add_filter( 'post_type_link', 'vx_soon_training_post_link', 1, 3 );

function archive_rewrite_rules() {
    add_rewrite_rule(
        '^realisation/(.*)/(.*)/?$',
        'index.php?post_type=realisations&name=$matches[2]',
        'top'
    );
}

add_action( 'init', 'archive_rewrite_rules' );

function custom_post_type_realisations() {
    $labels = array(
        'name'               => 'Réalisations',
        'singular_name'      => 'Réalisation',
        'menu_name'          => 'Réalisations',
        'name_admin_bar'     => 'Réalisation',
        'add_new'            => 'Ajouter une réalisation',
        'add_new_item'       => 'Ajouter',
        'new_item'           => 'Ajouter',
        'edit_item'          => 'Editer',
        'view_item'          => 'Toutes les réalisations',
        'all_items'          => 'Toutes les réalisations',
        'search_items'       => 'Rechercher',
        'parent_item_colon'  => 'Item parent',
        'not_found'          => 'Aucun résultat.',
        'not_found_in_trash' => 'Aucun résultat dans la corbeille',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite' => array('slug' => 'realisations/%category%'),
        'capability_type'    => 'post',
        'has_archive'        => 'realisations',
        'hierarchical'       => true,
        'show_in_rest'       => true,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-book',
        'supports'           => array( 'title', 'author', 'thumbnail' ),
        'taxonomies' => array('category')
    );

    register_post_type( 'realisations', $args );
}
add_action( 'init', 'custom_post_type_realisations' );

function add_elementor_support_for_custom_post_type()
{
    add_post_type_support('realisations', 'elementor');
}
add_action('init', 'add_elementor_support_for_custom_post_type');


 

