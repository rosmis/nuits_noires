const menuToggleSound = document.querySelectorAll(".cta-home");
const navbarHome = document.querySelector(".navbar");

const svgTrigger = document.querySelector(".cta-svg");
const svg = document.querySelectorAll(".svg-trigger");
const subtitlesWrapper = document.querySelector(".subtitles-content");

const triangleWrappers = document.querySelectorAll(".arrow-lottie");
const morphingTriangle = triangleData.morphingTriangle;
let morphingTriangleInstances = [];

let t2 = gsap.timeline({ paused: true });
let t3 = gsap.timeline({ paused: true });
let t4 = gsap.timeline({ paused: true });

let counter = 0;
let isMenuSoundToggled = false;

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
        duration: 3,
        ease: Power3.easeInOut,
    });

    // this is to prevent on first home page load to display sea wrappers that are underneath the first one and therefore shouldn't be displayed
    t4.to(index === 2 ? ".sea-wrapper" : `.sea-wrapper-${index + 1}`, {
        opacity: 1,
        duration: 0.2,
        ease: Power3.easeInOut,
    });

    t4.play();
    t3.play();

    counter++;
}

menuToggleSound.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const displaySubtitlesTimeline = gsap.timeline({ paused: true });

        displaySubtitlesTimeline.to(subtitlesWrapper, {
            opacity: 1,
            duration: 1,
            ease: Power3.easeInOut,
        });

        displaySubtitlesTimeline.play();
        isMenuSoundToggled = true;

        t2.play();
    });
});

window.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(morphingTriangle);

    const animationData = await response.json();

    triangleWrappers.forEach((_triangleWraper, index) =>
        toggleTriangleMorph(index, animationData)
    );
});

async function toggleTriangleMorph(index, animationData) {
    const config = {
        container: triangleWrappers[index],
        renderer: "svg", // Choose the appropriate renderer (svg, canvas, html)
        loop: false, // Set whether the animation should loop
        autoplay: false, // Set whether the animation should autoplay
        animationData: animationData,
    };

    // Create a Lottie instance
    const animation = lottie.loadAnimation(config);

    morphingTriangleInstances.push(animation);
}

svg.forEach((trigger, index) => {
    trigger.addEventListener("mouseenter", () => {
        morphingTriangleInstances[index].playSegments([18, 45], true);
    });
});

svg.forEach((trigger, index) => {
    trigger.addEventListener("mouseleave", () => {
        morphingTriangleInstances[index].playSegments([45, 18], true);
    });
});

// SCROLL Trigger to fade next sea animation - still WIP

gsap.registerPlugin(ScrollTrigger);

const videoContainers = document.querySelectorAll(".sea-wrapper");

videoContainers.forEach((video, index) => {
    ScrollTrigger.create({
        trigger: video,
        start: "top bottom",
        end: "+=199%",
        onLeaveBack: () => {
            gsap.to(video, { opacity: 0, duration: 1 }); // Fade out the current video
        },
    });
});

// listen for potential scroll end from user and redirect to next seaWrapper section
ScrollTrigger.addEventListener("scrollStart", () => {
    if (!isMenuSoundToggled || counter >= 3) return;

    if (svg[counter].classList.contains("display-content"))
        triggerNextScreen(counter);
});
