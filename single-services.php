<?php get_header();?>

<section class="realisation-wrapper trigger-footer">

    <?php if( have_posts() ): while( have_posts() ): the_post();
        $description = get_field( "description" );
        $accompagnement = get_field( "accompagnement" );
        $credit = get_field( "credit" );
        $post_excerpt = get_field( "intro" );
        $featured_img_url = get_the_post_thumbnail_url(); 

    ?>

    <div class="realisation-bg-wrapper" style="background-image: url(<?php echo $featured_img_url?>)">

        <div class="realisation-bg-content-header">
            <h1><?php the_title()?></h1>
            <div class="horizontal-divider"></div>

            <?php if($post_excerpt) { ?>
                <h2><?php echo $post_excerpt ?></h2>
            <?php } else {}?>
            
        </div>

    </div>

    <div class="realisation-main-wrapper custom-container-blog">

            <?php if($description) { ?>
                <div class="main-content-realisation-primary">
                    <?php echo $description ?>
                </div>
            <?php } else {}?>

        <div class="realisation-main-wrapper-content">

            <?php if($accompagnement) { ?>
                <div class="support-wrapper">
                    <h3><span></span> Notre accompagnement</h3>
                    <p><?php echo $accompagnement ?></p>
                </div>
            <?php } else {}?>

            <?php if($credit) { ?>
                <div class="claim-wrapper">
                    <h3><span></span> Ils en parlent</h3>
                    <p><?php echo $credit ?></p>
                </div>
            <?php } else {}?>
        </div>

        <?php echo the_content(); ?> 


        <div class="cta-wrapper">
            <a href="https://nuitsnoires.com" class="cta">
                Plongez dans l'univers sonore
            </a>

            <a href="https://nuitsnoires.com/contact" class="cta">
                Nous contacter
            </a>
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
                    <p>prochain service</p>
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



<?php get_footer('parallax');?>