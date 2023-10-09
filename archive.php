<?php
/*
Template Name: Archives
*/
get_header(); ?>

<section class="archive-wrapper">

    <h1><span></span> Nos articles</h1>

    <div class="posts-wrapper custom-container-blog">




        <?php
            $args = array(
                'post_type' => 'post',
                'posts_per_page' => -1, 
            );

            $query = new WP_Query($args);

            if ($query->have_posts()) :

                $counter = 0; // Initialize a counter for post index
                $post_group = array(); // Initialize an array to store posts in a group
    
                while ($query->have_posts()) : $query->the_post();
                    $counter++; // Increment the counter on each iteration
    
                    // Add the current post to the post group array with index
                    $post_item = array(
                        'index' => $counter,
                        'thumbnail' => get_the_post_thumbnail_url(),
                        'title' => get_the_title(),
                    );
    
                    // Check if it's the start of a new group (every 3rd post)
                    if ($counter % 3 === 1) {
                        echo '<div class="post-group-wrapper">';
                        echo '<div class="main-post">'; // Start the main post wrapper
                        ?>

                        <div class="post-wrapper-overflow">
                            <a href="<?php echo get_permalink() ?>" class="post-wrapper" style="background-image: url(<?php echo $post_item['thumbnail']; ?>);">
                                <h2><?php echo $post_item['title']; ?></h2>
                                <p>Posté le <?php echo get_the_date(); ?></p>
                            </a>
                        </div>

                        <?php
                        echo '</div>'; // Close the main post wrapper
                    } else {
                        $post_group[] = $post_item; // Add the post to the group array
                    }
    
                    // Check if it's the end of a group or the end of all posts
                    if ($counter % 3 === 0 || $counter === $query->post_count) {
                        echo '<div class="post-column-wrapper">';
                        // Output the remaining posts in the group
                        foreach ($post_group as $group_post) {
                            ?>
                            <div class="post-wrapper-overflow">
                                <a href="<?php echo get_permalink() ?>" class="post-wrapper" style="background-image: url(<?php echo $group_post['thumbnail']; ?>);">
                                    <h2><?php echo $group_post['title']; ?></h2>
                                    <p>Posté le <?php echo get_the_date(); ?></p>
                                </a>
                            </div>

                            <?php
                        }
                        echo '</div>'; // Close the group-wrapper
                        echo '</div>'; // Close the group-wrapper
                        // Reset the post group array
                        $post_group = array();
                    }
                endwhile;
    
                // Restore original post data
                wp_reset_postdata();
    
            else : ?>
    
                <p style="color: white">Aucuns articles</p>
            <?php endif;
            ?>
    </div>
    


</section>


<?php get_footer(); ?>