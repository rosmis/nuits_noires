<?php get_header();?>

<section class="realisation-wrapper">

    <?php if( have_posts() ): while( have_posts() ): the_post();
        $left_description = get_field( "description_gauche" );
        $right_description = get_field( "description_droite" );
        $accompagnement = get_field( "accompagnement" );
        $credit = get_field( "credit" );
        $featured_img_url = get_the_post_thumbnail_url(); 
        $audio = get_field( "audio" ); 
        $audio_title = get_field( "audio_title" ); 

    ?>

    <div class="realisation-bg-wrapper" style="background-image: url(<?php echo $featured_img_url?>)">

        <div class="realisation-bg-content-header">
            <h1><?php the_title();?></h1>
            <div class="horizontal-divider"></div>
            <h2>Faire ressentir la sensation <br> de confort par le son</h2>
        </div>

    </div>

    <div class="realisation-audio-wrapper custom-container-blog">
        <div class="audio-control-wrapper">
            <div class="cta-play">
                <i class="fa-solid fa-play" id="playToggle"></i>
            </div>

            <h2><?php echo $audio_title ?></h2>

        </div>

        <div class="audio-wrapper">

        </div>

    </div>

    <div class="realisation-main-wrapper custom-container-blog">
        <?php
        if (isset($left_description) && isset($right_description) && isset($accompagnement) && isset($credit)) { ?>

        <div class="realisation-main-wrapper-content">
            <?php echo $left_description ?>

            <?php echo $right_description ?>

            <div class="support-wrapper">
                <h3><span></span> Notre accompagnement</h3>
                <p><?php echo $accompagnement ?></p>
            </div>

            <div class="claim-wrapper">
                <h3><span></span> Ils en parlent</h3>
                <p><?php echo $credit ?></p>
            </div>
        </div>

        <?php
        } else {
            // At least one PHP variable doesn't exist, return an empty div
            echo '<div class="realisation-main-wrapper-content"></div>';
        }
        ?>

        <div class="cta-wrapper">
            <div class="cta">
                Plongez dans l'univers sonore
            </div>

            <div class="cta">
                Nous contacter
            </div>
        </div>
    </div>

    <?php
        $next_post = get_adjacent_post(true, '', true);
        if ($next_post) {
            $next_featured_img_url = get_the_post_thumbnail_url($next_post);
            $title = get_the_title( $next_post->ID );
            $next_post_url = get_permalink( $next_post->ID );
        
    ?>
        
        <a class="wrapper-next-project" id="next-project" href="<?php echo esc_url($next_post_url) ?>">
            <div class="wrapper-next-project-bg" style="background-image: url(<?php echo $next_featured_img_url?>)">
                <div class="wrapper-next-project-content">
                    <p>next project</p>
                    <p class="next-project-title"><?php echo $title ?></p>
                </div>
            </div>
        </a>
        

    <?php
       } else {
        echo '<div></div>';
    }
    ?>

    <?php endwhile; ?> 
    
    
    
    <?php endif;?>

</section>



<?php get_footer();?>