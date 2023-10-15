const categoryWrappers = document.querySelectorAll(".category-wrapper");
const triggers = document.querySelectorAll(".controller");

const triggerContentPrevious = document.querySelector(".title-previous");
const triggerContentNext = document.querySelector(".title-next");

const morphingDataUrlPath = data?.morphingShapes;
const morphingDataUrlServicesPath = data?.morphingServicesShapes;
const morphingWrapper = document.getElementById("morphing-wrapper");

const isDeviceWidthPhone = window.matchMedia("(max-width: 992px)").matches;

//HOVER STATE CONTROLLERS

const controllerShapeDataUrl = data?.controllerShape;
const morphingControllerNextWrapper = document.querySelector(".arrow-next");
const morphingControllerPreviousWrapper =
    document.querySelector(".arrow-previous");

let morphingControllerNextInstance;
let morphingControllerPreviousInstance;

fetch(controllerShapeDataUrl)
    .then((response) => response.json())
    .then((animationData) => {
        // create instance for each controller

        [
            morphingControllerNextWrapper,
            morphingControllerPreviousWrapper,
        ].forEach((wrapper) => {
            const config = {
                container: wrapper,
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: animationData,
                rendererSettings: {
                    preserveAspectRatio: "none",
                    // viewBoxSize: true,
                },
            };

            // Create a Lottie instance
            const animation = lottie.loadAnimation(config);
            wrapper === morphingControllerNextWrapper
                ? (morphingControllerNextInstance = animation)
                : (morphingControllerPreviousInstance = animation);
        });
    })
    .catch((error) => {
        console.error("Error loading animation data:", error);
    });

triggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => {
        // don't toggle morphing shape on mobile as there is no hover effect
        if (isDeviceWidthPhone) return;

        if (trigger.classList.contains("next")) {
            const nextIndex = (currentIndex + 1) % slides.length;
            // don't show preview titles on service page

            morphingDataUrlPath
                ? (triggerContentNext.innerText = triggerTitles[nextIndex])
                : undefined;

            morphingControllerNextInstance.playSegments([50, 80], true);

            return;
        }
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        morphingDataUrlPath
            ? (triggerContentPrevious.innerText = triggerTitles[prevIndex])
            : undefined;

        morphingControllerPreviousInstance.playSegments([50, 80], true);
    });

    trigger.addEventListener("mouseleave", () => {
        if (isDeviceWidthPhone) return;

        if (trigger.classList.contains("next")) {
            morphingControllerNextInstance.playSegments([60, 50], true);
            return;
        }

        morphingControllerPreviousInstance.playSegments([60, 50], true);
    });
});

//DISPLAY NEXT SLIDE STATE

const slides = gsap.utils.toArray(".category-wrapper");
const anchorCategoryTags = gsap.utils.toArray(".title-wrapper");
const triggerTitles = ["Culturel", "Marque", "Art Vivant", "Patrimoine"];
let currentIndex = 0;

triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        if (trigger.classList.contains("next")) {
            showNextSlide();
            return;
        }

        showPrevSlide();
    });
});

function showSlide(index) {
    gsap.to(slides[currentIndex], { opacity: 0, pointerEvents: "none" });
    gsap.to(slides[index], { opacity: 1, pointerEvents: "all" });

    gsap.to(anchorCategoryTags[currentIndex], {
        opacity: 0,
        pointerEvents: "none",
    });
    gsap.to(anchorCategoryTags[index], { opacity: 1, pointerEvents: "all" });

    triggerNextMorphingShape(index);
    currentIndex = index;
}

function showPrevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function showNextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}

// MORPH SHAPE STATE

let morphingShapesLottieInstance;

fetch(morphingDataUrlPath ?? morphingDataUrlServicesPath)
    .then((response) => response.json())
    .then((animationData) => {
        const config = {
            container: morphingWrapper,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "none",
                // viewBoxSize: true,
            },
        };

        // Create a Lottie instance
        const animation = lottie.loadAnimation(config);
        morphingShapesLottieInstance = animation;
    })
    .catch((error) => {
        console.error("Error loading animation data:", error);
    });

function triggerNextMorphingShape(index) {
    const morphingShapesDict = {
        0: () => morphingShapesLottieInstance.playSegments([0, 40], true),
        1: () => morphingShapesLottieInstance.playSegments([154, 220], true),
        2: () => morphingShapesLottieInstance.playSegments([292, 330], true),
        3: () => morphingShapesLottieInstance.playSegments([484, 520], true),
    };

    return morphingShapesDict[+index]();
}
