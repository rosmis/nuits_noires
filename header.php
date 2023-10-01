<!DOCTYPE html>
<html lang="fr" style="margin-top: 0 !important">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuits Noires</title>

    <link rel="icon" href="<?php echo get_template_directory_uri() . '/src/assets/favicon.png'?>" type="image/x-icon">

    <?php wp_head();?>

    <div class="logo-wrapper">
      <a href="http://localhost:10003" class="logo-top-navbar">
        <img src="<?php echo get_template_directory_uri() . '/src/assets/logo.svg'?>" class="logo_navbar" />
      </a>
    </div>

    <header class="navbar">
        <div class="hamburger">
          <div class="hamburger-lines"></div>
        </div>

        
      
      <div class="nav-links-wrapper">
          <ul class="nav-links">
            <li>
            <a class="nav-link" href="http://localhost:10003">Nuits Noires</a>
            </li>
            <li>
              <a class="nav-link" href="<?php echo get_permalink(25)?>">Immersion</a>
            </li>
          </ul>

          <div class="nav-icon-wrapper">
            <div id="audio-equalizer"></div>

            <a href="https://www.instagram.com/nuitsnoiresexperiences/" target="_blank">
              <img src="<?php echo get_template_directory_uri() . '/src/assets/linkedin.svg'?>" />
            </a>

            <a href="https://www.linkedin.com/company/nuits-noires/" target="_blank">
              <img src="<?php echo get_template_directory_uri() . '/src/assets/instagram.svg'?>" />
            </a>
          </div>
      </div>
    </header>

    <header class="nav-fullpage">
      <video muted autoplay loop controlslist="nodownload" class="nav-fullpage-bg">
          <source src="<?php echo get_template_directory_uri(). '/src/assets/video/sur_la_surface.webm'?>" type="video/mp4">
      </video>
      <div class="logo_navbar_wrapper">
        <img src="<?php echo get_template_directory_uri() . '/src/assets/logo.svg'?>" class="logo_navbar" />
      </div>

      <ul class="main-nav-links">
        <li>
          <a class="nav-link" href="http://localhost:10003/realisations">Réalisations</a>
          <span>Notre portfolio</span>
        </li>
        <li>
          <a class="nav-link" href="http://localhost:10003/about">À propos</a>
          <span>Mieux nous connaître</span>
        </li>
        <li>
          <a class="nav-link" href="<?php echo get_permalink(25)?>">Services</a>
          <span>Découvrir nos prestations</span>
        </li>
        <li>
          <a class="nav-link" href="<?php echo get_permalink(25)?>">Blog</a>
          <span>En apprendre plus</span>
        </li>
        <li>
          <a class="nav-link" href="http://localhost:10003/contact">Contact</a>
          <span>Échanger avec nous</span>
        </li>
      </ul> 
    </header>





  </head>
  <body>