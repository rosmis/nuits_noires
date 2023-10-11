gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// SCROLL ANIMATION

let panels = gsap.utils.toArray(".work"),
    observer = ScrollTrigger.normalizeScroll(true),
    scrollTween;

const cards = gsap.utils.toArray(".card-wrapper");
const cardWrappers = gsap.utils.toArray(".card-wrapper-transform");

const circleBackgroundImageContainer = document.querySelector(".circled-image");
const backgroundImageContainer = document.querySelector(".background-wrapper");

// on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
document.addEventListener(
    "touchstart",
    (e) => {
        if (scrollTween) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    },
    { capture: true, passive: false }
);

panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: (self) =>
            self.isActive && !scrollTween && goToSection(i, self.direction),
    });
});

let counter = 0;

function goToSection(i, direction, self) {
    scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        onStart: () => {
            observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
            observer.enable();

            setCardAnimation(direction === 1 ? i - 1 : i, direction);

            setCircleBackgroundImage(i);

            generateAnchorOpacity(i);

            counter++;
            // this is to prevent the incrementArcRotation to trigger itself at when dom is mounted - didn't find a prettier way to do it
            if (counter === 1) return;

            incrementArcRotation(cardWrappers.length, direction);
            translateAnchorLinks(i, direction);
        },
        duration: 0.8,
        ease: Power1.easeInOut,
        onComplete: () => (scrollTween = null),
        overwrite: true,
    });
}

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
ScrollTrigger.create({
    start: 0,
    end: "max",
    snap: 1 / (panels.length - 1),
});

// ANIMATION CARD ON SCROLL

function setCardAnimation(index, direction) {
    // prevent gsap target error
    if (index === -1) return;

    const card_timeline1 = gsap.timeline({ paused: true });
    const card_timeline2 = gsap.timeline({ paused: true });

    if (direction === 1) {
        card_timeline1.to(cards[index], {
            transform: "rotateX(0) rotateY(0) rotateZ(0)",
            duration: 0.6,
            ease: Power1.easeInOut,
        });

        card_timeline1.to(
            cardWrappers[index],
            {
                opacity: 0,
                duration: 0.6,
                ease: Power1.easeInOut,
            },
            "-=0.6"
        );
        card_timeline1.play();

        card_timeline2.to(cards[index + 1], {
            transform: "rotateX(28deg) rotateY(-23deg) rotateZ(15deg)",
            duration: 1,
            ease: Power2.easeInOut,
        });

        card_timeline2.to(
            cardWrappers[index + 1],
            {
                opacity: 1,
                duration: 1,
                ease: Power2.easeInOut,
            },
            "-=1"
        );
        card_timeline2.play();
        return;
    }

    card_timeline2.to(cards[index + 1], {
        transform: "rotateX(0) rotateY(0) rotateZ(0)",
        duration: 0.5,
        ease: Power1.easeInOut,
    });

    card_timeline2.to(
        cardWrappers[index + 1],
        {
            opacity: 0,
            duration: 0.5,
            ease: Power1.easeInOut,
        },
        "-=0.5"
    );
    card_timeline2.play();

    card_timeline1.to(cards[index], {
        transform: "rotateX(28deg) rotateY(-23deg) rotateZ(15deg)",
        duration: 0.6,
        ease: Power1.easeInOut,
    });

    card_timeline1.to(
        cardWrappers[index],
        {
            opacity: 1,
            duration: 0.6,
            ease: Power1.easeInOut,
        },
        "-=0.6"
    );
    card_timeline1.timeScale(0.8);
    card_timeline1.play();
}

// SCROLLING ARC ANIMATION ON SCROLL
document.addEventListener("DOMContentLoaded", () => console.log("loaaded"));

const scrollArc = document.getElementById("circle-progress");

const scrollingArcTimeline = gsap.timeline({ paused: true });

function incrementArcRotation(postsLength, direction) {
    const maxRadiusRotation = 120;
    const rotationRadiusPerIteration = Math.floor(
        maxRadiusRotation / postsLength
    );
    const arcPreviousMatrixTransform =
        window.getComputedStyle(scrollArc)["transform"];

    // Parse the rotation from the matrix
    let rotateValue = 347;
    const matrixPattern = /^matrix\((.+)\)$/;
    const match = arcPreviousMatrixTransform.match(matrixPattern);

    if (match) {
        const matrixValues = match[1].split(",").map(parseFloat);
        if (matrixValues.length === 6) {
            rotateValue =
                Math.atan2(matrixValues[1], matrixValues[0]) * (180 / Math.PI);

            // Adjust negative values to positive angles
            if (rotateValue < 0) {
                rotateValue += 360;
            }
        }
    }

    const updatedRotationRadius =
        direction === 1
            ? rotateValue + rotationRadiusPerIteration
            : rotateValue - rotationRadiusPerIteration;

    scrollingArcTimeline.to(scrollArc, {
        transform: `rotate(${updatedRotationRadius}deg)`,
        duration: 1,
        ease: Power1.easeInOut,
    });

    scrollingArcTimeline.play();
}

// ANCHOR LINKS SNAP SCROLL
const anchorLinks = document.querySelectorAll(".anchor-work-link");
const anchorLinksWrapper = document.querySelector(".wrapper-circle-content");

function generateAnchorOpacity(index) {
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

let translateYWrapperValue = 100;

function translateAnchorLinks(index, direction) {
    const anchorIndexesToTranslate = [];
    let anchorLinksCounter = 0;

    const generateTranslateYAnchorTimeline = (index) => {
        const anchorTranslateYTimeline = gsap.timeline({ paused: true });

        const computedStyle = window.getComputedStyle(anchorLinks[index]);

        const transformValue = computedStyle.getPropertyValue("transform");

        const matrix = new DOMMatrix(transformValue);
        const translateXValue = matrix.m41;

        anchorTranslateYTimeline.to(anchorLinks[index], {
            transform: `translateX(${translateXValue}px) translateY(${translateYWrapperValue}px)`,
            duration: 0.8,
            ease: Power1.easeInOut,
        });

        anchorTranslateYTimeline.play();
    };

    translateYWrapperValue += -direction * 30;

    anchorLinks.forEach((_anchorLink, index) =>
        generateTranslateYAnchorTimeline(index)
    );

    const generateTranslateXAnchorTimeline = (index, translateXPosition) => {
        const anchorLinkTimeline = gsap.timeline({ paused: true });

        const computedStyle = window.getComputedStyle(anchorLinks[index]);

        const transformValue = computedStyle.getPropertyValue("transform");

        const matrix = new DOMMatrix(transformValue);
        const translateXValue = matrix.m41;

        anchorLinkTimeline.to(anchorLinks[index], {
            transform: `translateX(${
                translateXValue + translateXPosition
            }px) translateY(${translateYWrapperValue}px)`,
            duration: 0.8,
            ease: Power1.easeInOut,
        });

        anchorLinkTimeline.play();
    };

    if (index === 0) anchorIndexesToTranslate.push(0);

    for (let i = index - 1; i >= 0; i--) {
        anchorIndexesToTranslate.push(i);
    }

    anchorIndexesToTranslate.forEach((index) => {
        anchorLinksCounter += -direction * 10;
        generateTranslateXAnchorTimeline(index, anchorLinksCounter);
    });
}

function setCircleBackgroundImage(index) {
    const thumbnailPostUrl = cards[index].getAttribute("data-thumbnail-url");

    circleBackgroundImageContainer.style.backgroundImage = `url(${thumbnailPostUrl})`;
    backgroundImageContainer.style.backgroundImage = `url(${thumbnailPostUrl})`;
}
