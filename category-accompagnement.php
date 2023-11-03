<?php
get_header('category')
?>


<section class="work-wrapper trigger-footer">
    <div class="work-template">
        <h1><span></span> Accompagnement en diffusion</h1>
        <div class="background-wrapper"></div>
    </div>

    <h1 class="mobile-title"><span></span> Accompagnement en diffusion</h1>

    <div class="wrapper-circle-content">
    </div>

    <div class="circle-progress-wrapper">
        <div id="circle-progress">
            <svg id="rotate-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 624 624" width="470" height="470" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_20"><rect width="624" height="624" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_20)"><g transform="matrix(0.9659258127212524,-0.258819043636322,0.258819043636322,0.9659258127212524,3.06121826171875,133.57070922851562)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(112,112,113)" stroke-opacity="1" stroke-width="1" d=" M252.125,0 C391.3699951171875,0 504.2489929199219,112.87999725341797 504.2489929199219,252.125 C504.2489929199219,391.3699951171875 391.3699951171875,504.2489929199219 252.125,504.2489929199219 C112.87999725341797,504.2489929199219 0,391.3699951171875 0,252.125 C0,112.87999725341797 112.87999725341797,0 252.125,0z"></path></g></g><g transform="matrix(0.9063077569007874,0.4226182699203491,-0.4226182699203491,0.9063077569007874,189.89979553222656,-23.204465866088867)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke-dasharray=" 150 2000" stroke-dashoffset="0" stroke="rgb(201,150,27)" stroke-opacity="1" stroke-width="5" d=" M252.125,0 C391.3699951171875,0 504.2489929199219,112.87999725341797 504.2489929199219,252.125 C504.2489929199219,391.3699951171875 391.3699951171875,504.2489929199219 252.125,504.2489929199219 C112.87999725341797,504.2489929199219 0,391.3699951171875 0,252.125 C0,112.87999725341797 112.87999725341797,0 252.125,0z"></path></g></g><g transform="matrix(0.9961947202682495,0.0871557667851448,-0.0871557667851448,0.9961947202682495,480.3292236328125,124.0960464477539)" opacity="0.09876" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(193,152,58)" fill-opacity="1" d=" M0,-20.004499435424805 C11.040483474731445,-20.004499435424805 20.004499435424805,-11.040483474731445 20.004499435424805,0 C20.004499435424805,11.040483474731445 11.040483474731445,20.004499435424805 0,20.004499435424805 C-11.040483474731445,20.004499435424805 -20.004499435424805,11.040483474731445 -20.004499435424805,0 C-20.004499435424805,-11.040483474731445 -11.040483474731445,-20.004499435424805 0,-20.004499435424805z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(0.9961947202682495,0.0871557667851448,-0.0871557667851448,0.9961947202682495,480.33050537109375,124.09452056884766)" opacity="0.09791000000000001" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(193,152,58)" fill-opacity="1" d=" M0,-14.003000259399414 C7.728255748748779,-14.003000259399414 14.003000259399414,-7.728255748748779 14.003000259399414,0 C14.003000259399414,7.728255748748779 7.728255748748779,14.003000259399414 0,14.003000259399414 C-7.728255748748779,14.003000259399414 -14.003000259399414,7.728255748748779 -14.003000259399414,0 C-14.003000259399414,-7.728255748748779 -7.728255748748779,-14.003000259399414 0,-14.003000259399414z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(0.9961947202682495,0.0871557667851448,-0.0871557667851448,0.9961947202682495,480.3298645019531,124.09527587890625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(201,150,27)" fill-opacity="1" d=" M0,-8.001999855041504 C4.416303634643555,-8.001999855041504 8.001999855041504,-4.416303634643555 8.001999855041504,0 C8.001999855041504,4.416303634643555 4.416303634643555,8.001999855041504 0,8.001999855041504 C-4.416303634643555,8.001999855041504 -8.001999855041504,4.416303634643555 -8.001999855041504,0 C-8.001999855041504,-4.416303634643555 -4.416303634643555,-8.001999855041504 0,-8.001999855041504z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g><g transform="matrix(0.7660444378852844,0.6427876353263855,-0.6427876353263855,0.7660444378852844,311.8500061035156,311.85101318359375)" opacity="1" style="display: block;"></g></g></svg>
        </div>

        <div class="circled-image"></div>

    </div>


    <?php
    // Custom loop for Realizations
    $args = array(
        'post_type' => 'services',
        'posts_per_page' => -1, 
        'tax_query' => array(
            array(
                'taxonomy' => 'category', 
                'field'    => 'slug',                 
                'terms'    => 'accompagnement',             
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
                        <p>plus</p>
                    </div>
                </a>

                <?php if($i === 1) :?>
                    <div class="card-wrapper" data-thumbnail-url="<?php echo esc_url($thumbnail_url) ?>" style="background-image: url(<?php echo esc_url($thumbnail_url)?>); transform: rotateX(28deg) rotateY(-23deg) rotateZ(15deg);"></div>
                <?php else : ?>
                    <div class="card-wrapper" data-thumbnail-url="<?php echo esc_url($thumbnail_url) ?>" style="background-image: url(<?php echo esc_url($thumbnail_url)?>); transform: rotateX(0) rotateY(0) rotateZ(0);"></div>
                <?php endif?>
            </div>
        </div>
            

        <?php endwhile;

        // Restore original post data
        wp_reset_postdata();

    else : ?>
        <p>Aucuns services pour le moment dans cette catégorie</p>
    <?php endif;
    ?>






</section>


<?php get_footer('parallax');?>