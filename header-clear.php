<!DOCTYPE html>
<html lang="fr" style="margin-top: 0 !important">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuits Noires</title>

    <?php
        $description = '';

        if( is_post_type_archive('realisations') )
          $description = 'Plongez vos publics dans votre histoire, sublimez votre savoir-faire, rendez vos connaissances accessibles à tous par le médium de l\'audio';

        if( is_post_type_archive('services') )
          $description = 'Vous recherchez des professionnels de l\'audio immersif ? Nuits Noires propose des services de création sonore immersive et sensible pour les musées, les marques, les territoires et le patrimoine.';
      ?>

    <meta name="description" content="<?php echo $description ?>" />

    <link rel="icon" href="<?php echo get_template_directory_uri() . '/src/assets/favicon.png'?>" type="image/x-icon">

    <?php wp_head();?>

    <div class="logo-wrapper wrapper-clear" id="logo-wrapper">
      <a href="https://nuitsnoires.com" class="logo-top-navbar">
        <img src="<?php echo get_template_directory_uri() . '/src/assets/logo.webp'?>" class="logo_navbar" />
      </a>
    </div>

    <header class="navbar" id="navbar-clearer">
        <div class="hamburger">
          <div class="hamburger-lines"></div>
        </div>

        
      
      <div class="nav-links-wrapper">
          <ul class="nav-links">
            <li>
            <a class="nav-link" href="https://nuitsnoires.com/realisations/">Réalisations</a>
            </li>
            <li>
              <a class="nav-link" href="https://nuitsnoires.com/contact">Contact</a>
            </li>
          </ul>

          <div class="nav-icon-wrapper">
            <div id="audio-equalizer"></div>

            <a href="https://www.linkedin.com/company/nuits-noires/" target="_blank">
              <img src="<?php echo get_template_directory_uri() . '/src/assets/linkedin.svg'?>" />
            </a>

            <a href="https://www.instagram.com/nuitsnoiresexperiences/" target="_blank">
              <img src="<?php echo get_template_directory_uri() . '/src/assets/instagram.svg'?>" />
            </a>
          </div>
      </div>
    </header>

    <header class="nav-fullpage">
      <video muted autoplay loop controlslist="nodownload" playsinline class="nav-fullpage-bg">
          <source src="<?php echo get_template_directory_uri(). '/src/assets/video/sur_la_surface.webm'?>" type="video/webm">

          <source src="<?php echo get_template_directory_uri(). '/src/assets/video/mp4/top_resized.mp4'?>" type="video/mp4">
      </video>
      <a href="https://nuitsnoires.com" class="logo_navbar_wrapper">
        <img src="<?php echo get_template_directory_uri() . '/src/assets/logo.webp'?>" class="logo_navbar" />
      </a>

      <ul class="main-nav-links">
        <li>
          <a class="nav-link" href="https://nuitsnoires.com/realisations">Réalisations</a>
          <span>Notre portfolio</span>
        </li>
        <li>
          <a class="nav-link" href="https://nuitsnoires.com/about">À propos</a>
          <span>Mieux nous connaître</span>
        </li>
        <li>
          <a class="nav-link" href="https://nuitsnoires.com/services">Services</a>
          <span>Découvrir nos prestations</span>
        </li>
        <li>
          <a class="nav-link" href="https://nuitsnoires.com/blog">Blog</a>
          <span>En apprendre plus</span>
        </li>
        <li>
          <a class="nav-link" href="https://nuitsnoires.com/contact">Contact</a>
          <span>Échanger avec nous</span>
        </li>
      </ul> 
    </header>





  </head>
  <body>