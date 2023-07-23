<?php
/*
Template name: REALISATIONS
*/
?>


<?php
get_header()
?>

<div class="realisations-wrapper">

<?php if (have_rows('realisations'));

$i=0;

?>


<?php while( have_rows('realisations')): the_row();


    $title = get_sub_field('title');
    $description = get_sub_field('description');
    $bg = get_sub_field('bg');

    $i++;
    $z_index = count(get_field('realisations'));
    
    ?>

    <div class="category-wrapper" style="background-image: url(<?php echo $bg?>); z-index: <?php echo $z_index - $i ?>">

        <div class="title-wrapper">
            <h2>Réalisation</h1>
            <h1><?php echo $title ?></h1>
        </div>

        <div class="description-wrapper">
            <p><?php echo $description ?></p>
        </div>
        
    </div>

    <?php endwhile;?>
</div>




<?php get_footer();?>