const menuToggleSound = document.querySelectorAll(".cta-home");
const navbarHome = document.querySelector(".navbar");

const svgTrigger = document.querySelector(".cta-svg");
const svg = document.querySelectorAll(".svg-trigger");
const subtitlesWrapper = document.querySelectorAll(".subtitles-content");

let t2 = gsap.timeline({ paused: true });
let t3 = gsap.timeline({ paused: true });

let counter = 0;

t2.to(".activate-sound-wrapper", {
    duration: 1,
    bottom: "120%",
    display: "none",
    ease: Power3.easeInOut,
});

svg.forEach((trigger) => {
    trigger.addEventListener("click", () => triggerNextScreen(counter));
});

function triggerNextScreen(index) {
    t3.to(`.sea-wrapper-${index}`, {
        opacity: 0,
        display: "none",
        duration: 1,
        ease: Power3.easeInOut,
    });

    t3.play();

    counter++;
}

menuToggleSound.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        navbarHome.classList.add("display-navbar");

        svg[0].classList.add("display-content");
        subtitlesWrapper[0].classList.add("display-content");

        t2.play();
    });
});

gsap.registerPlugin(MorphSVGPlugin);

let timeline_arrow = gsap.timeline({ paused: true });

timeline_arrow.to(".svg-arrow-wrapper", {
    top: "-20%",
    duration: 0.15,
    ease: Power3.easeInOut,
});

let svgTimelines = [];

svg.forEach((_trigger, index) => {
    const outer_svg_timeline = gsap.timeline({
            defaults: { duration: 0.2 },
            paused: true,
        }),
        outer_triangle = document.getElementById(`outer_triangle_${index}`);

    const inner_svg_timeline = gsap.timeline({
            defaults: { duration: 0.2 },
            paused: true,
        }),
        inner_triangle = document.getElementById(`inner_triangle_${index}`);

    svgTimelines.push({
        outer_svg: {
            timeline: outer_svg_timeline,
            triangle: outer_triangle,
        },
        inner_svg: {
            timeline: inner_svg_timeline,
            triangle: inner_triangle,
        },
    });
});

svg.forEach((trigger, index) => {
    trigger.addEventListener("mouseenter", () => {
        playSvgTriggerAnimation(index).play();
        timeline_arrow.play();
    });
});

svg.forEach((trigger, index) => {
    trigger.addEventListener("mouseleave", () => {
        playSvgTriggerAnimation(index).reverse();
        timeline_arrow.reverse();
    });
});

function playSvgTriggerAnimation(index) {
    const innerTimeline = svgTimelines[index].inner_svg.timeline;
    const outerTimeline = svgTimelines[index].outer_svg.timeline;

    outerTimeline.to(
        svgTimelines[index].outer_svg.triangle,
        {
            morphSVG: {
                shape: `#outer_circle_${index}`,
            },
        },
        {
            ease: Power4.easeInOut,
        }
    );

    innerTimeline.to(
        svgTimelines[index].inner_svg.triangle,
        {
            morphSVG: {
                shape: `#inner_circle_${index}`,
            },
        },
        {
            ease: Power4.easeInOut,
        }
    );

    return {
        play: () => {
            outerTimeline.play();
            innerTimeline.play();
        },
        reverse: () => {
            outerTimeline.reverse();
            innerTimeline.reverse();
        },
    };
}

// SCROLL Trigger to fade next sea animation - still WIP

gsap.registerPlugin(ScrollTrigger);

const videoContainers = document.querySelectorAll(".sea-wrapper");

videoContainers.forEach((video, index) => {
    ScrollTrigger.create({
        trigger: video,
        start: "top bottom",
        end: "+=199%",
        onEnter: () => {
            //     if(index === 0) {
            //         gsap.to(videoContainers[0], { opacity: 1, duration: 1 });
            //         console.log('enters')
            //         return
            //     }
            //     console.log('enters')
            //   gsap.to(videoContainers[index], { opacity: 1, duration: 1 });
            //   gsap.to(videoContainers[index - 1], { opacity: 0, duration: 1 }); // Fade out the current video
        },
        onLeaveBack: () => {
            gsap.to(video, { opacity: 0, duration: 1 }); // Fade out the current video
            console.log("leaves");
        },
    });
});

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let panels = gsap.utils.toArray(".video-container"),
//     observer = ScrollTrigger.normalizeScroll(true),
//     scrollTween;

// // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
// document.addEventListener("touchstart", e => {
//   if (scrollTween) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// }, {capture: true, passive: false})

// function goToSection(i) {
//   scrollTween = gsap.to(window, {
//     scrollTo: {y: i * innerHeight, autoKill: false},
//     onStart: () => {
//       observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
//       observer.enable();
//     },
//     duration: 1,
//     onComplete: () => scrollTween = null,
//     overwrite: true
//   });
// }

// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top bottom",
//     end: "+=199%",
//     onToggle: self => self.isActive && !scrollTween && goToSection(i)
//   });
// });

// // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
// ScrollTrigger.create({
//   start: 0,
//   end: "max",
//   snap: 1 / (panels.length - 1)
// })
