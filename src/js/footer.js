gsap.set("footer", { yPercent: -50 });

const uncover = gsap.timeline({ paused: true });

uncover.to("footer", { yPercent: 0, ease: "none" });

ScrollTrigger.create({
    trigger: ".article-wrapper",
    start: "bottom bottom",
    end: "+=55%",
    animation: uncover,
    scrub: true,
});
