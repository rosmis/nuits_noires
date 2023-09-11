gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel");

function GSAPHorizontalScroll() {
    let GSAPHorizontalScrollTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-wrapper",
            pin: true,
            start: "0% 0%",
            end:
                "+=" +
                (document.querySelector("#timeline-wrapper").scrollWidth -
                    window.innerWidth),
            scrub: 0.1,
            ease: "none",
            // markers: true,
        },
    });

    const scrollTween = GSAPHorizontalScrollTL.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
    });

    sections.forEach((item, index) => {
        ScrollTrigger.create({
            trigger: item,
            containerAnimation: scrollTween,
            toggleClass: "active",
            start: "center 40%",
        });
    });
}

window.onload = () => {
    GSAPHorizontalScroll();
};
