gsap.registerPlugin(ScrollTrigger);

const audioWrapper = document.querySelector(".audio-wrapper");
const playButton = document.querySelector(".cta-play");
const playToggle = document.getElementById("playToggle");

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
            markers: false,
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

window.onload = () => GSAPHorizontalScroll();

// AUDIO PLAYER

window.addEventListener("DOMContentLoaded", () =>
    wavesurfer.load(
        "http://localhost:10003/wp-content/uploads/2023/09/Exp_Binaural_Rdv_Nuits_Noires-1.wav"
    )
);

const options = {
    container: audioWrapper,
    height: 50,
    splitChannels: false,
    normalize: false,
    waveColor: "#ffffff",
    progressColor: "#c1983a",
    cursorColor: "#ffffff",
    cursorWidth: 2,
    barWidth: 3,
    barGap: 4,
    barRadius: 30,
    barHeight: 1.1,
    barAlign: "",
    minPxPerSec: 1,
    fillParent: true,
    mediaControls: false,
    autoplay: false,
    interact: true,
    dragToSeek: true,
    hideScrollbar: true,
    audioRate: 1,
    autoScroll: true,
    autoCenter: true,
    sampleRate: 8000,
};

const wavesurfer = WaveSurfer.create(options);

wavesurfer.once("decode", () => {
    playButton.addEventListener("click", () => {
        wavesurfer.playPause();

        if (playToggle.classList.contains("fa-play")) {
            playToggle.classList.remove("fa-play");
            playToggle.classList.add("fa-pause");
        } else {
            playToggle.classList.remove("fa-pause");
            playToggle.classList.add("fa-play");
        }
    });
});

// SCROLL ARC PROGRESS

const scrollingArcTimeline = gsap.timeline({ paused: true });
const scrollArc = document.getElementById("circle-progress");

gsap.to("#rotate-circle", {
    ease: "none",
    scrollTrigger: {
        trigger: ".about-wrapper",
        scrub: 0.3,
        onUpdate: (self) => {
            const incrementProgress = self.progress * 100;

            const newRotation = 320 + incrementProgress;

            scrollArc.style.rotate = `${newRotation}deg`;
        },
    },
});

// INTERSECTION OBSERVERS
const target = document.getElementById("team-wrapper");

function handleIntersection(entries, observer) {
    console.log("entries", entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("Target element is in the viewport!");
        }
    });
}

const intersectionOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver(
    handleIntersection,
    intersectionOptions
);

observer.observe(target);
