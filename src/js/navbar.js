const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

let displayToggleSoundWrapperTimeline = gsap.timeline({ paused: true });
let toggleNavFullPageTimeline = gsap.timeline({ paused: true });

toggleNavFullPageTimeline.to(".nav-fullpage", {
    display: "block",
    opacity: 1,
    duration: 1,
    ease: Power3.easeInOut,
});

window.addEventListener("load", () => {
    const toggleSoundWrapper = document.querySelector(
        ".activate-sound-wrapper"
    );
    if (!toggleSoundWrapper) {
        navbar.classList.add("display-navbar");
        navbar.classList.add("background");
        return;
    }

    displayToggleSoundWrapperTimeline.to(".activate-sound-wrapper", {
        duration: 1,
        opacity: 1,
        bottom: "25%",
        ease: Power1.easeInOut,
    });

    displayToggleSoundWrapperTimeline.play();
});

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("toggle")) {
        toggleNavFullPageTimeline.timeScale(2);
        toggleNavFullPageTimeline.reverse();

        hamburger.classList.toggle("toggle");
        return;
    }

    toggleNavFullPageTimeline.play();
    hamburger.classList.toggle("toggle");
});

// TOGGLE AUDIO SOUND

const animationDataUrlPath = data.animationDataUrl;
const equalizer = document.getElementById("audio-equalizer");

let equalizerLottieInstance;
let equalizerStatus;

window.addEventListener("DOMContentLoaded", () => {
    const localStorageEqualizerStatus = localStorage.getItem("equalizerStatus");

    if (!localStorageEqualizerStatus) {
        const initialEqualizerStatus = localStorage.setItem(
            "equalizerStatus",
            true
        );

        console.log("here");

        equalizerStatus = initialEqualizerStatus;

        equalizerStatusAnimationDict();
        return;
    }

    equalizerStatus = JSON.parse(localStorageEqualizerStatus);
    equalizerStatusAnimationDict();
});

function equalizerStatusAnimationDict() {
    if (equalizerStatus) {
        return equalizerLottieInstance.playSegments([40, 77], true);
    }

    return equalizerLottieInstance.playSegments([0, 25], true);
}

fetch(animationDataUrlPath)
    .then((response) => response.json())
    .then((animationData) => {
        const config = {
            container: equalizer,
            renderer: "svg", // Choose the appropriate renderer (svg, canvas, html)
            loop: false, // Set whether the animation should loop
            autoplay: false, // Set whether the animation should autoplay
            animationData: animationData,
        };

        // Create a Lottie instance
        const animation = lottie.loadAnimation(config);
        equalizerLottieInstance = animation;
    })
    .catch((error) => {
        console.error("Error loading animation data:", error);
    });

equalizer.addEventListener("click", () => {
    if (equalizerStatus) {
        localStorage.setItem("equalizerStatus", false);

        equalizerStatus = !equalizerStatus;

        equalizerStatusAnimationDict();
        return;
    }

    localStorage.setItem("equalizerStatus", true);

    equalizerStatus = !equalizerStatus;

    equalizerStatusAnimationDict();
});
