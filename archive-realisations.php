<?php
get_header('clear')
?>

<section class="realisations-wrapper">

    <div class="controllers-wrapper controller-left">
        <div class="controller previous">

            <div class="arrow-previous"></div>
                
            
            <p class="title-previous"></p>
        </div>
    </div>
    

    <div class="controllers-wrapper controller-right">
        <div class="controller next">

            <div class="arrow-next"></div>

            <p class="title-next"></p>
        </div> 
    </div>

    <a href="https://nuitsnoires.com/realisations/culturel" class="title-wrapper" style="opacity: 1">
        <h2>Réalisation</h1>
        <h1>Culture</h1>
    </a>

    <a href="https://nuitsnoires.com/realisations/marque" class="title-wrapper" style="opacity: 0; pointer-events: none">
        <h2>Réalisation</h1>
        <h1>Marque</h1>
    </a>

    <a href="https://nuitsnoires.com/realisations/art-vivant" class="title-wrapper" style="opacity: 0; pointer-events: none">
        <h2>Réalisation</h1>
        <h1>Art Vivant</h1>
    </a>

    <a href="https://nuitsnoires.com/realisations/patrimoine" class="title-wrapper" style="opacity: 0; pointer-events: none">
        <h2>Réalisation</h1>
        <h1>Patrimoine</h1>
    </a>

    <div class="category-wrapper" style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/realisations.png); opacity: 1">
        <div class="gray-filter"></div>
    </div>

    <div class="category-wrapper" style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/marque.png); opacity: 0">                 
        <div class="gray-filter"></div>
    </div>

    <div class="category-wrapper" style="background-image: url(<?php echo get_template_directory_uri(). '/src/assets/categories/art_vivant.webp'?>); opacity: 0">                 
        <div class="gray-filter"></div>
    </div>

    <div class="category-wrapper" style="background-image: url(<?php echo get_template_directory_uri(). '/src/assets/categories/patrimoine.webp'?>); opacity: 0">                 
        <div class="gray-filter"></div>
    </div>

    <div id="morphing-wrapper"></div>


</section>




<?php get_footer();?>