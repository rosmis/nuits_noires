<?php get_header();?>


<div class="home_wrapper">

    <div class="sea-wrapper video-container sea-wrapper-0" style="z-index: 4">
        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/sur_la_surface.webm'?>" type="video/mp4">
        </video>

        <div class="activate-sound-wrapper">
            <div>
                <h1>Nuits Noires vous invite à plonger en immersion<span>.</span></h1>
                <p>Souhaitez vous activer le son pour une expérience plus immersive ?</p>
            </div>

            <div class="cta-wrapper">
                <div class="cta cta-home">
                    Oui
                </div>

                <div class="cta cta-home">
                    Non
                </div>
            </div>
        </div>

        <div class="cta cta-trigger">
            SCROLL
        </div>
    </div>

    <div class="sea-wrapper video-container sea-wrapper-1" style="z-index: 3">

        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/sous_la_surface_compressed.webm'?>" type="video/mp4">
        </video>

        <div class="cta cta-trigger">
            SCROLL
        </div>
        
    </div>

    <div class="sea-wrapper video-container sea-wrapper-2" style="z-index: 2">

        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/ocean_middle_compressed.webm'?>" type="video/mp4">
        </video>

        <div class="cta cta-trigger">
            SCROLL
        </div>
        
    </div>

    <div class="sea-wrapper video-container" style="z-index: 1">

        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/FOND.webm'?>" type="video/mp4">
        </video>
        
    </div>
</div>

<?php get_footer();?>