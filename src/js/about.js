gsap.registerPlugin(ScrollTrigger);

const audioWrapper = document.querySelector(".audio-wrapper");
const playButton = document.querySelector(".cta-play");
const playToggle = document.getElementById("playToggle");

const sections = gsap.utils.toArray(".panel");
const isDeviceWidthPhone = window.matchMedia("(max-width: 992px)").matches;

const brandWrappers = document.querySelectorAll(".brand-wrapper");
const brandWrapperEqualizers = document.querySelectorAll(
    ".equalizer-brand-wrapper"
);

const audioEqualizer = document.getElementById("audio-equalizer");
const animationEqualierPath = data.brandEqualizer;

const aboutToggleSound = document.querySelectorAll(".cta-home");
const aboutWrapper = document.querySelector(".about-wrapper");

let brandEqualizerInstancesDict = {};
let brandSoundsInstancesDict = {};
let animationData;

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

window.addEventListener("DOMContentLoaded", async () => {
    if (isDeviceWidthPhone) aboutWrapper.classList.remove("about-blurred");

    GSAPHorizontalScroll();

    const response = await fetch(animationEqualierPath);

    animationData = await response.json();
});

// AUDIO PLAYER

window.addEventListener("DOMContentLoaded", () => {
    if (isDeviceWidthPhone) return;

    wavesurfer.load(
        "https://nuitsnoires.com/wp-content/uploads/2023/11/Exp_Binaural_Rdv_Nuits_Noires_V2.mp3"
    );
});

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

brandSoundsDict = {
    0: "https://nuitsnoires.com/wp-content/uploads/2023/09/Art-explora.mp3",
    1: "https://nuitsnoires.com/wp-content/uploads/2023/09/Billecart.mp3",
    2: "https://nuitsnoires.com/wp-content/uploads/2023/09/centre-Pompidou.mp3",
    3: "https://nuitsnoires.com/wp-content/uploads/2023/09/Louis-Vuitton.mp3",
    4: "https://nuitsnoires.com/wp-content/uploads/2023/09/ak.mp3",
    5: "https://nuitsnoires.com/wp-content/uploads/2023/09/MNHN-Chroniques-de-notr-eplanete.mp3",
    6: "https://nuitsnoires.com/wp-content/uploads/2023/09/MQB.mp3",
    7: "https://nuitsnoires.com/wp-content/uploads/2023/09/Contrappunto.mp3",
    8: "https://nuitsnoires.com/wp-content/uploads/2023/09/Palais-de-Tokyo.mp3",
    9: "https://nuitsnoires.com/wp-content/uploads/2023/09/PMO.mp3",
    10: "https://nuitsnoires.com/wp-content/uploads/2023/09/Salomon.mp3",
};

const wavesurfer = WaveSurfer.create(options);

//TOGGLE SOUNDS FROM EACH BRAND SHOWCASE

brandWrappers.forEach((brandWrapper, index) => {
    brandWrapper.addEventListener("mouseenter", () => {
        playEqualizerInstance(index);

        brandSoundsInstancesDict[index].play();
        brandSoundsInstancesDict[index].fade(0, 1, 2000);
    });

    brandWrapper.addEventListener("mouseleave", () => {
        brandEqualizerInstancesDict[index].stop();
        brandSoundsInstancesDict[index].stop();
    });
});

// mute toggle

audioEqualizer.addEventListener("click", () => {
    const localStorageEqualizerStatus = JSON.parse(
        localStorage.getItem("equalizerStatus")
    );

    for (const key in brandSoundsInstancesDict) {
        brandSoundsInstancesDict[key].mute(!localStorageEqualizerStatus);
    }
});

function playEqualizerInstance(index) {
    if (!brandEqualizerInstancesDict[index]) {
        const config = {
            container: brandWrapperEqualizers[index],
            renderer: "svg",
            loop: true,
            autoplay: false,
            animationData,
        };

        const animation = lottie.loadAnimation(config);

        brandEqualizerInstancesDict = {
            ...brandEqualizerInstancesDict,
            [index]: animation,
        };
    }

    brandEqualizerInstancesDict[index].play();
    brandEqualizerInstancesDict[index].setSpeed(0.5);
}

function createBrandSoundInstance(index) {
    if (!brandSoundsInstancesDict[index]) {
        const localStorageEqualizerStatus = JSON.parse(
            localStorage.getItem("equalizerStatus")
        );

        brandSoundsInstancesDict[index] = new Howl({
            src: [brandSoundsDict[index]],
            mute: localStorageEqualizerStatus,
            loop: true,
        });
    }
}

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
        0: "https://nuitsnoires.com/wp-content/uploads/2023/10/Histoire-createur-nuits-noires.webp",
        1: "https://nuitsnoires.com/wp-content/uploads/2023/10/Neumann-KU100.webp",
        2: "https://nuitsnoires.com/wp-content/uploads/2023/11/Professionnel-immersion-sonore-artistique-3.webp",
    };

    circleBackgroundImageContainer.style.backgroundImage = `url(${backgroundImageDict[index]})`;
}

// HIDE TOGGLE SOUND AFTER USER GESTURE

let hideToggleSoundOnUserGestureTimeline = gsap.timeline({ paused: true });

hideToggleSoundOnUserGestureTimeline.to(".activate-sound-wrapper", {
    duration: 1,
    bottom: "120%",
    display: "none",
    ease: Power3.easeInOut,
});

aboutToggleSound.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        aboutWrapper.classList.remove("about-blurred");
        hideToggleSoundOnUserGestureTimeline.play();

        // create brand wrapper audio instances
        brandWrappers.forEach((_brandWrapper, index) =>
            createBrandSoundInstance(index)
        );
    });
});
