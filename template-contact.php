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
            <a href="mailto:prod.nuitsnoires@gmail.com">JOIN US</a>
        </div>

        <div class="contact-img-grid">
            <div style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/nuits-noires-salon.webp)" class="contact-img"></div>
            <div style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/cuisine-nuitsnoires.webp)" class="contact-img"></div>
            <div style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/liveroom-1-ps.webp)" class="contact-img"></div>
            <div style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/dehors-1-nuitsnoires.webp)" class="contact-img"></div>
            <div style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/regie-1-ps.webp)" class="contact-img"></div>
            <div style="background-image: url(https://nuitsnoires.com/wp-content/uploads/2023/10/bureau-1-base-nuitsnoires.webp)" class="contact-img"></div>
        </div>
    </div>
</section>



<?php get_footer();?>