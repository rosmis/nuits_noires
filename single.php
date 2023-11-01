<?php get_header();?>

<section class="article-wrapper trigger-footer">
    <?php if( have_posts() ): while( have_posts() ): the_post(); ?>

    <div class="article-content custom-container-blog">

        <div class="article-content-header">
            <h1><?php echo get_the_title() ?></h1>
        
            <p><?php echo the_excerpt() ?></p>
            <div class="article-thumbnail" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>"></div>
        </div>

        
        <div class="article-main-content">
            <?php echo the_content() ?>
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
                    <p>prochain article</p>
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