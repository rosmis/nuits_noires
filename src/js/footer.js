const footerWrapper = document.querySelector(".trigger-footer");

if (footerWrapper) {
    gsap.set(".footer-section", { yPercent: -50 });

    const uncover = gsap.timeline({ paused: true });

    uncover.to(".footer-section", {
        yPercent: 0,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger: ".trigger-footer",
        start: "bottom bottom",
        end: "+=45%",
        animation: uncover,
        scrub: true,
        markers: false,
    });

    ScrollTrigger.refresh();
}
