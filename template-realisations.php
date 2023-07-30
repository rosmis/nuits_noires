<?php
/*
Template name: REALISATIONS
*/
?>


<?php
get_header()
?>

<div class="realisations-wrapper">

<div class="controllers-wrapper">
    <div class="controller previous">
        
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 83 71" style="transform: rotate(-30deg)">
                <path id="left_outer_triangle" data-name="Polygone 3" d="M41.5,1.982,1.743,70H81.257L41.5,1.982M41.5,0,83,71H0Z" transform="translate(83 71) rotate(180)" fill="#fff"/>
                <path id="left_outer_circle" data-name="Polygone 3" style="visibility: hidden" d="M41.5,24.376A22.976,22.976,0,0,0,30.435,27.2a22.3,22.3,0,0,0-4.767,3.528,23.529,23.529,0,0,0-6.293,10.793,22.286,22.286,0,0,0-.721,5.932A23.094,23.094,0,0,0,29.742,66.778a22.287,22.287,0,0,0,5.485,2.371,23.539,23.539,0,0,0,12.546,0,22.287,22.287,0,0,0,5.485-2.371A23.094,23.094,0,0,0,64.346,47.453a22.287,22.287,0,0,0-.721-5.932,23.529,23.529,0,0,0-6.293-10.793A22.3,22.3,0,0,0,52.565,27.2,22.976,22.976,0,0,0,41.5,24.376m0-1a23.594,23.594,0,0,1,20.558,11.8h0A23.812,23.812,0,0,1,41.5,71h0A23.812,23.812,0,0,1,20.942,35.171h0A23.594,23.594,0,0,1,41.5,23.376Z" transform="translate(65.348 71) rotate(180)" fill="#fff"/>

                <path id="left_inner_triangle" data-name="Polygone 2" d="M26.5,1.971,1.749,44h49.5L26.5,1.971M26.5,0,53,45H0Z" transform="translate(68 52) rotate(180)" fill="#fff"/>
                <path id="left_inner_circle" data-name="Polygone 2" style="visibility: hidden" d="M26.5,15.7a14.148,14.148,0,1,0,12.191,6.969A14.02,14.02,0,0,0,26.5,15.7m0-1a15.148,15.148,0,1,1-13.053,7.461A15.011,15.011,0,0,1,26.5,14.7Z" transform="translate(41.671 45) rotate(180)" fill="#fff"/>
            </svg>
            
        
        <p>Patrimoine</p>
    </div>

    <div class="controller next">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 83 71" style="transform: rotate(30deg)">
                <path id="right_outer_triangle" data-name="Polygone 3" d="M41.5,1.982,1.743,70H81.257L41.5,1.982M41.5,0,83,71H0Z" transform="translate(83 71) rotate(180)" fill="#fff"/>
                <path id="right_outer_circle" data-name="Polygone 3" style="visibility: hidden" d="M41.5,24.376A22.976,22.976,0,0,0,30.435,27.2a22.3,22.3,0,0,0-4.767,3.528,23.529,23.529,0,0,0-6.293,10.793,22.286,22.286,0,0,0-.721,5.932A23.094,23.094,0,0,0,29.742,66.778a22.287,22.287,0,0,0,5.485,2.371,23.539,23.539,0,0,0,12.546,0,22.287,22.287,0,0,0,5.485-2.371A23.094,23.094,0,0,0,64.346,47.453a22.287,22.287,0,0,0-.721-5.932,23.529,23.529,0,0,0-6.293-10.793A22.3,22.3,0,0,0,52.565,27.2,22.976,22.976,0,0,0,41.5,24.376m0-1a23.594,23.594,0,0,1,20.558,11.8h0A23.812,23.812,0,0,1,41.5,71h0A23.812,23.812,0,0,1,20.942,35.171h0A23.594,23.594,0,0,1,41.5,23.376Z" transform="translate(65.348 71) rotate(180)" fill="#fff"/>

                <path id="right_inner_triangle" data-name="Polygone 2" d="M26.5,1.971,1.749,44h49.5L26.5,1.971M26.5,0,53,45H0Z" transform="translate(68 52) rotate(180)" fill="#fff"/>
                <path id="right_inner_circle" data-name="Polygone 2" style="visibility: hidden" d="M26.5,15.7a14.148,14.148,0,1,0,12.191,6.969A14.02,14.02,0,0,0,26.5,15.7m0-1a15.148,15.148,0,1,1-13.053,7.461A15.011,15.011,0,0,1,26.5,14.7Z" transform="translate(41.671 45) rotate(180)" fill="#fff"/>
            </svg>
        <p>Patrimoine</p>
    </div> 
</div>

<?php if (have_rows('realisations'));

$i=0;

?>


<?php while( have_rows('realisations')): the_row();


    $title = get_sub_field('title');
    $description = get_sub_field('description');
    $bg = get_sub_field('bg');

    $i++;
    
    ?>

    <?php if($i === 1) :?>
        <div class="category-wrapper" style="background-image: url(<?php echo $bg?>); z-index: 1; opacity: 1">                 
    <?php else : ?>
        <div class="category-wrapper" style="background-image: url(<?php echo $bg?>); z-index: 0; opacity: 0">    
    <?php endif?>

    
        <div class="gray-filter"></div>

        <div></div>

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