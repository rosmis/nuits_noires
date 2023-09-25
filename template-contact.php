<?php
/*
Template name: CONTACT
*/
?>


<?php
get_header()
?>



<section class="contact-wrapper">
    <h1><span></span> Contact</h1>

    <div class="contact-form-container">
        <p>Tout commence par une idée. <br> Faites qu'elle devienne réalité</p>

        <div class="contact-form-wrapper">
            <?php the_content();?>

        </div>
    </div>

    <div class="contact-infos">
        <div class="contact-infos-row">
            <div class="contact-item">
                <h3>Contact</h3>

                <div>
                    <a href="mailto:elodie@nuitsnoires.com">elodie@nuitsnoires.com</a>
                    <a href="tel:06.11.78.16.05">06.11.78.16.05</a>
                </div>
            </div>

            <div class="contact-item">
                <h3>Contact</h3>

                <div>
                    <a href="mailto:jeremie@nuitsnoires.com">jeremie@nuitsnoires.com</a>
                    <a href="tel:06.22.93.45.83">06.22.93.45.83</a>
                </div>
            </div>
            <a href="#">JOIN US</a>
        </div>

        <div class="contact-img-grid">
            <div style="background-image: url(http://localhost:10003/wp-content/uploads/2023/09/REGIE1PS.png)" class="contact-img"></div>
            <div style="background-image: url(http://localhost:10003/wp-content/uploads/2023/09/NuitsNoires_Salon.png)" class="contact-img"></div>
            <div style="background-image: url(http://localhost:10003/wp-content/uploads/2023/09/LIVEROOM1PS-1.png)" class="contact-img"></div>
            <div style="background-image: url(http://localhost:10003/wp-content/uploads/2023/09/Dehors1_NuitsNoires.png)" class="contact-img"></div>
            <div style="background-image: url(http://localhost:10003/wp-content/uploads/2023/09/Cuisine_NuitsNoires.png)" class="contact-img"></div>
            <div style="background-image: url(http://localhost:10003/wp-content/uploads/2023/09/Bureau1base_NuitsNoires.png)" class="contact-img"></div>
        </div>
    </div>
</section>



<?php get_footer();?>