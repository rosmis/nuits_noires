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
    // wp_enqueue_script('kute', 'https://cdnjs.cloudflare.com/ajax/libs/kute.js/2.0.0/kute.min.js', [], 1, true);
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', [], 1, true);
    wp_enqueue_script('scrollTrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', [], 1, true);
    wp_enqueue_script('gsap_js', get_template_directory_uri() . '/src/js/gsap.js', [], 1, true);
    // wp_enqueue_script('kute_js', get_template_directory_uri() . '/src/js/kute.js', [], 1, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/src/js/main.js', [], 1, true);
    
}

add_action( 'wp_enqueue_scripts', 'NuitsNoires_register_scripts');

 

