gsap.registerPlugin(ScrollTrigger);

const audioWrapper = document.querySelector(".audio-wrapper");
const playButton = document.querySelector(".cta-play");
const playToggle = document.getElementById("playToggle");

const sections = gsap.utils.toArray(".panel");
const isDeviceWidthPhone = window.matchMedia("(max-width: 992px)").matches;

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
            start: isDeviceWidthPhone ? "center 60%" : "center 40%",
        });
    });
}

window.onload = () => GSAPHorizontalScroll();

// AUDIO PLAYER

window.addEventListener("DOMContentLoaded", () =>
    wavesurfer.load(
        "https://nuitsnoires.com/wp-content/uploads/2023/10/Exp_Binaural_Rdv_Nuits_Noires-_1_-1.mp3"
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
const sectionsToIntercept = document.querySelectorAll(".section-to-intercept");
const anchorLinks = document.querySelectorAll(".anchor-work-link");
const circleBackgroundImageContainer = document.querySelector(".circled-image");

let observerOptions = {
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionIndex = Array.from(
                document.querySelectorAll(".section-to-intercept")
            ).indexOf(entry.target);

            triggerAnchorLinkOpacity(sectionIndex);
            setCircleBackgroundImage(sectionIndex);
        }
    });
}

sectionsToIntercept.forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});

function triggerAnchorLinkOpacity(index) {
    const generateAnchorOpacityTimeline = (index, opacity) => {
        const anchorTimeline = gsap.timeline({ paused: true });

        anchorTimeline.to(anchorLinks[index], {
            opacity,
            duration: 0.8,
            ease: Power1.easeInOut,
        });

        anchorTimeline.play();
    };

    anchorLinks.forEach((_anchorLink, indexAnchor) => {
        generateAnchorOpacityTimeline(indexAnchor, 0.4);
    });

    generateAnchorOpacityTimeline(index, 1);
}

function setCircleBackgroundImage(index) {
    const backgroundImageDict = {
        0: "https://nuitsnoires.com/wp-content/uploads/2023/10/Screenshot-2023-06-27-at-21.21.35-1.png",
        1: "https://nuitsnoires.com/wp-content/uploads/2023/10/immersive-bg-1.png",
        2: "https://nuitsnoires.com/wp-content/uploads/2023/10/Metiers_du_son_equipe_NuitsNoires.jpg",
    };

    circleBackgroundImageContainer.style.backgroundImage = `url(${backgroundImageDict[index]})`;
}
