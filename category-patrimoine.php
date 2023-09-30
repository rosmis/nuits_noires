<?php
get_header()
?>


<div class="work-wrapper">
    <div class="work-template">
        <h1><span></span> Nos réalisations patrimoine</h1>
        <div class="background-wrapper" style="background-image: url(<?php echo get_template_directory_uri(). '/src/assets/salomon.png'?>)"></div>
    </div>

    <div class="circle-progress-wrapper">
        <div id="circle-progress">
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 785.693 823.191" id="rotate-circle">
                <g id="Groupe_1932" data-name="Groupe 1932" transform="translate(-13.759 10.013)">
                    <path id="Ellipse_1712" data-name="Ellipse 1712" d="M347-2.5A347.877,347.877,0,0,1,537.47,53.913a2.5,2.5,0,1,1-2.728,4.19A342.877,342.877,0,0,0,347,2.5,2.5,2.5,0,0,1,344.5,0,2.5,2.5,0,0,1,347-2.5ZM76.793,562.23a2.5,2.5,0,0,1,1.947.93,345.054,345.054,0,0,0,161.1,111.348,2.5,2.5,0,0,1-1.554,4.752A350.055,350.055,0,0,1,74.849,566.3a2.5,2.5,0,0,1,1.944-4.07Z" transform="translate(373.485 -53.784) rotate(38)" fill="#c9961b"/>
                    <circle id="Ellipse_1715" data-name="Ellipse 1715" cx="30" cy="30" r="30" transform="translate(675.755 226.893) rotate(-35)" fill="#c1983a" opacity="0.099"/>
                    <circle id="Ellipse_1714" data-name="Ellipse 1714" cx="21" cy="21" r="21" transform="translate(688.289 229.103) rotate(-35)" fill="#c1983a" opacity="0.098"/>
                    <circle id="Ellipse_1713" data-name="Ellipse 1713" cx="12" cy="12" r="12" transform="translate(700.824 231.313) rotate(-35)" fill="#c9961b"/>
                </g>
            </svg>
        </div>

        <div class="circled-image" style="background-image: url(<?php echo get_template_directory_uri(). '/src/assets/salomon.png'?>)"></div>

        <div class="wrapper-circle-content">

            <?php
            // Custom loop for Realizations
            $args = array(
                'post_type' => 'realisations',
                'posts_per_page' => -1, 
                'tax_query' => array(
                    array(
                        'taxonomy' => 'category', 
                        'field'    => 'slug',                 
                        'terms'    => 'patrimoine',             
                    ),
                )
            );

            $query = new WP_Query($args);

            if ($query->have_posts()) :
                $i=0;

                while ($query->have_posts()) : $query->the_post(); 

                $i-=5; ?>

                <p class="anchor-work-link" style="transform: translateX(<?php echo ($i)?>px)"><?php the_title() ?></p>
                    

                <?php endwhile;

                // Restore original post data
                wp_reset_postdata();

                else : ?>

                <p>Aucuns articles</p>
            <?php endif;
            ?>
        </div>

    </div>


    <?php
    // Custom loop for Realizations
    $args = array(
        'post_type' => 'realisations',
        'posts_per_page' => -1, 
        'tax_query' => array(
            array(
                'taxonomy' => 'category', 
                'field'    => 'slug',                 
                'terms'    => 'patrimoine',             
            ),
        ),
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) :
        $i=0;

        while ($query->have_posts()) : $query->the_post(); 

        $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); 
        $post_url = get_permalink(); 
        $post_excerpt = get_field('intro');

        $i++;

        ?>

        <div class="work">
            <div class="card-wrapper-transform" style="opacity: 1">
                <div class="content-card-wrapper">
                    <h1><?php the_title(); ?></h1>
                    <p><?php echo $post_excerpt ?></p>
                </div>

                <a class="cta-more-wrapper" href="<?php echo esc_url($post_url) ?>"> 
                    <div class="cta-more">
                        <div class="hidden-circle"></div>
                        <div class="outer-circle"></div>
                        <div class="inner-circle"></div>
                        <p>more</p>
                    </div>
                </a>

                <?php if($i === 1) :?>
                    <div class="card-wrapper" style="background-image: url(<?php echo esc_url($thumbnail_url)?>); transform: rotateX(28deg) rotateY(-23deg) rotateZ(15deg);"></div>
                <?php else : ?>
                    <div class="card-wrapper" style="background-image: url(<?php echo esc_url($thumbnail_url)?>); transform: rotateX(0) rotateY(0) rotateZ(0);"></div>
                <?php endif?>
            </div>
        </div>
            

        <?php endwhile;

        // Restore original post data
        wp_reset_postdata();

    else : ?>
        <p>Aucuns articles pour le moment dans cette catégorie</p>
    <?php endif;
    ?>






</div>


<?php get_footer();?>