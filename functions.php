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
    if( is_page(8) ) {
        wp_enqueue_script('realisations', get_template_directory_uri() . '/src/js/realisations.js', [], 1, true);
    }

    if( is_page(30) ) {
        wp_enqueue_script('scrollTo', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js', [], 1, true);
        wp_enqueue_script('work', get_template_directory_uri() . '/src/js/work.js', [], 1, true);
    }

    if( is_front_page() ) {
        wp_enqueue_script('home', get_template_directory_uri() . '/src/js/gsap.js', [], 1, true);
    }
    // if( is_page(9) ) {
    //     wp_enqueue_script('counter', get_template_directory_uri() . '/src/js/counter_skilder.js', [], 1, true);
    //     wp_enqueue_script('video_loader', get_template_directory_uri() . '/src/js/video_player.js', [], 1, true);
    // }
}

add_action('wp_enqueue_scripts', 'load_js_assets');

 

