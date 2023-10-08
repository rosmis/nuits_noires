<?php get_header('front');?>


<section class="home_wrapper">

    <div class="activate-sound-wrapper">
        <div>
            <h1>Nuits Noires vous invite à plonger en immersion<span>.</span></h1>
            <p>Souhaitez vous activer le son pour une expérience plus immersive ?</p>
        </div>

        <div class="cta-wrapper">
            <div class="cta cta-home unmute">
                Oui
            </div>

            <div class="cta cta-home mute">
                Non
            </div>
        </div>
    </div>

    <div class="sea-wrapper video-container sea-wrapper-0" style="z-index: 4">
        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/sur_la_surface.webm'?>" type="video/mp4">
        </video>

        
        <div class="svg-trigger">

            <div class="arrow-lottie"></div>


            <p>SCROLL</p>
        </div>
    </div>

    <div class="sea-wrapper video-container sea-wrapper-1" style="z-index: 3">

        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/sous_la_surface.webm'?>" type="video/mp4">
        </video>


        <div class="svg-trigger display-content">

            <div class="arrow-lottie"></div>


            <p>SCROLL</p>
        </div>
    </div>

    <div class="sea-wrapper video-container sea-wrapper-2" style="z-index: 2">

        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/middle.webm'?>" type="video/mp4">
        </video>

        <div class="svg-trigger display-content">

            <div class="arrow-lottie"></div>


            <p>SCROLL</p>
        </div>
        
    </div>

    <div class="sea-wrapper video-container" style="z-index: 1">

        <video muted autoplay loop controlslist="nodownload" class="top-sea-home">
            <source src="<?php echo get_template_directory_uri(). '/src/assets/video/fond.webm'?>" type="video/mp4">
        </video>
        
    </div>

    <div class="subtitles-content">

        <div class="subtitles-wrapper">
            <p>Nuits Noires vous invite à plonger en immersion.</p>
            <p>Fermez les yeux et laissez-nous vous emmener <br> à la découverte de notre savoir-faire. </p>
            <p>Pour une meilleure immersion, mettez votre casque ou vos écouteurs. </p>
            <p>Vous êtes prêts ? Allez, on plonge !</p>
            <p>Naviguez vers le bas de la page.</p>
        </div>

        <div class="subtitles-wrapper" style="opacity: 0">
            <p style="opacity: 0.3">Chez Nuits Noires, nous sommes des créateurs de contenu immersif <br> à destination de votre public.</p>
            <p style="opacity: 0.2">Nous co-créons avec vous, votre création sonore sur-mesure, <br> avec subtilité et intemporalité. </p>
        </div>

        <div class="subtitles-wrapper" style="opacity: 0">
            <p style="opacity: 0.3">Votre création sonore, nous la pensons pour qu'elle immerge tous vos publics, <br> dans votre univers.</p>
            <p style="opacity: 0.2">Pour que votre contenu sonore éveille leurs imaginaires, <br> les transporte vers des voyages et des sensations, en mêlant son immersif et narration dans une subtile composition. </p>
            <p style="opacity: 0.1"> <em style="font-weight: 700">Pour rendre visible, l’invisible…</em>  </p>
        </div>

        <div class="subtitles-wrapper" style="opacity: 0">
            <p style="opacity: 0.2">Nous vous accompagnons dans votre création sonore de l’idée à la diffusion <br> dans une démarche personnalisée et adaptée à vos besoins.</p>

            <div class="cta-wrapper cta-subtitles">
                <a href="https://nuitsnoires.com/realisations" class="cta cta-home">
                    Découvrez nos créations
                </a>

                <a href="https://nuitsnoires.com/contact" class="cta cta-home">
                    Nous contacter
                </a>
            </div>
        </div>
    </div>
</section>

<?php get_footer();?>