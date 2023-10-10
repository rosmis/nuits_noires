const menuToggleAudio = document.querySelectorAll(".cta-home");
const seaWrapperTriggers = document.querySelectorAll(".svg-trigger");

const subtitleWrappers = document.querySelectorAll(".subtitles-wrapper");
const ctaBottom = document.querySelector(".cta-subtitles");

const audioEqualizer = document.getElementById("audio-equalizer");

let isScrollBehaviorEnabled = false;

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "+=100%",
    // markers: true,
});

// listen for potential scroll from user and redirect to next seaWrapper section

ScrollTrigger.addEventListener("scrollStart", () => {
    if (seaWrapperIndex >= 3 || !isScrollBehaviorEnabled) return;

    if (
        !seaWrapperTriggers[seaWrapperIndex].classList.contains(
            "display-content"
        )
    )
        return;

    playNextSound();
});

const timeCodeSubtitlesDict = {
    0: [0, 5, 11, 16, 21],
    1: [4, 10],
    2: [1, 6, 17],
    3: [3, 11],
};

let subtitleIndex = 0;
let seaWrapperIndex = 0;
let translateCounter = 0;

let soundsTimelineDict = {};
let timeCodeInterval;

menuToggleAudio.forEach((toggle) => {
    let isSoundDisabled = false;

    toggle.addEventListener("click", () => {
        if (toggle.classList.contains("mute")) {
            localStorage.setItem("equalizerStatus", false);
            console.log("muted");

            isSoundDisabled = true;
        } else {
            localStorage.setItem("equalizerStatus", true);
        }

        soundsTimelineDict = {
            0: {
                content: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Part_1_cut.ogg",
                    ],
                    html5: true,
                    mute: isSoundDisabled,
                    onend: () => {
                        soundsTimelineDict[seaWrapperIndex].loop.play();
                        soundsTimelineDict[seaWrapperIndex].loop.fade(
                            0,
                            1,
                            5000
                        );
                    },
                }),
                loop: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Loop_Strate_1.ogg",
                    ],
                    mute: isSoundDisabled,
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Transition_1.ogg",
                    ],
                    mute: isSoundDisabled,
                }),
            },
            1: {
                content: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Part_2.ogg",
                    ],
                    html5: true,
                    mute: isSoundDisabled,
                    onend: () => {
                        soundsTimelineDict[seaWrapperIndex].loop.play();
                        soundsTimelineDict[seaWrapperIndex].loop.fade(
                            0,
                            1,
                            5000
                        );
                    },
                }),
                loop: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Loop_Strate_2.ogg",
                    ],
                    mute: isSoundDisabled,
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Transition_2.ogg",
                    ],
                    mute: isSoundDisabled,
                }),
            },
            2: {
                content: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Part_3.ogg",
                    ],
                    html5: true,
                    mute: isSoundDisabled,
                    onend: () => {
                        soundsTimelineDict[seaWrapperIndex].loop.play();
                        soundsTimelineDict[seaWrapperIndex].loop.fade(
                            0,
                            1,
                            5000
                        );
                    },
                }),
                loop: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Loop_Strate_3.ogg",
                    ],
                    mute: isSoundDisabled,
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Transition_3.ogg",
                    ],
                    mute: isSoundDisabled,
                }),
            },
            3: {
                content: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Part_4.ogg",
                    ],
                    html5: true,
                    mute: isSoundDisabled,
                    onend: () => {
                        soundsTimelineDict[seaWrapperIndex].loop.play();
                        soundsTimelineDict[seaWrapperIndex].loop.fade(
                            0,
                            1,
                            5000
                        );
                    },
                }),
                loop: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Loop_Strate_4.ogg",
                    ],
                    mute: isSoundDisabled,
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "https://nuitsnoires.com/wp-content/uploads/2023/10/Transition_3.ogg",
                    ],
                    mute: isSoundDisabled,
                }),
            },
        };

        // initialize timer to check timecode compatibilty for subtitle's opacity

        timeCodeInterval = setInterval(() => {
            const currentTimeCode = Math.round(
                soundsTimelineDict[seaWrapperIndex].content.seek()
            );

            if (
                timeCodeSubtitlesDict[seaWrapperIndex][subtitleIndex] <=
                currentTimeCode
            ) {
                triggerSubtitleOpacity(subtitleWrappers[seaWrapperIndex]);

                // display cta on last seaWrapper
                if (seaWrapperIndex === 3 && currentTimeCode >= 11) {
                    displayCtaBottomSea();
                }
            }
        }, 300);

        // trigger first voice content
        // soundsTimelineDict[seaWrapperIndex].content.seek(22);
        soundsTimelineDict[seaWrapperIndex].content.play();
    });
});

function triggerSubtitleOpacity(wrapper) {
    const paragraphsInWrapper = wrapper.querySelectorAll("p");
    const paragraphsInWrapperArray = Array.from(paragraphsInWrapper);

    const lastParagraph = paragraphsInWrapperArray.at(-1);

    let subtitleTimeline = gsap.timeline({ paused: true });
    let subtitlesTranslateTimeline = gsap.timeline({ paused: true });

    subtitleTimeline.to(paragraphsInWrapper[subtitleIndex], {
        duration: 1,
        opacity: 1,
        ease: Power3.easeInOut,
    });

    translateCounter += subtitleIndex * -1.3;

    // trigger opacity next seaWrapper
    if (lastParagraph === paragraphsInWrapperArray[subtitleIndex]) {
        if (seaWrapperIndex !== 3)
            seaWrapperTriggers[seaWrapperIndex].classList.add(
                "display-content"
            );

        displaySvgTrigger(seaWrapperIndex);
        isScrollBehaviorEnabled = true;
    }

    subtitlesTranslateTimeline.to(subtitleWrappers, {
        duration: 0.7,
        transform: `translateY(${translateCounter}em)`,
        ease: Power3.easeInOut,
    });

    console.log("triggering single opacity");

    // TODO bring back also this
    // paragraphsInWrapper[subtitleIndex].classList.add("displayed");

    subtitleTimeline.play();
    subtitlesTranslateTimeline.play();

    subtitleIndex++;
}

// CLICK SVG STATE
seaWrapperTriggers.forEach((trigger) => {
    trigger.addEventListener("click", playNextSound);
});

function displayCtaBottomSea() {
    const displayCtaBottomSeaTimeline = gsap.timeline({ paused: true });

    displayCtaBottomSeaTimeline.to(ctaBottom, {
        duration: 1,
        opacity: 1,
        pointerEvents: "all",
        transform: `translateY(0)`,
        ease: Power3.easeInOut,
    });

    displayCtaBottomSeaTimeline.play();
}

function playNextSound() {
    let paragraphsInWrapper =
        subtitleWrappers[seaWrapperIndex].querySelectorAll("p");

    let remainingParagraphsBeforeNextContainer =
        Array.from(paragraphsInWrapper).slice(subtitleIndex);

    let subtitlesTranslateInterludeTimeline = gsap.timeline({
        paused: true,
    });

    displayOpacityNextParagraphContainer(seaWrapperIndex + 1);

    // if there are remaining paragraphs that have not been translated on trigger action, sum these translations and move container accordingly
    if (remainingParagraphsBeforeNextContainer.length > 0) {
        console.log("triggering plss");
        remainingParagraphsBeforeNextContainer.forEach((_paragraph) =>
            triggerSubtitleOpacity(subtitleWrappers[seaWrapperIndex])
        );
    }

    // setTimeout(() => {
    subtitlesTranslateInterludeTimeline.to(subtitleWrappers, {
        duration: 1,
        transform: `translateY(${translateCounter - 4.4}em)`,
        ease: Power3.easeInOut,
    });

    console.log("EXECUTING MAIN TRANSLATION");

    subtitlesTranslateInterludeTimeline.play();
    // }, 100);

    // trigger sound transition based on seaWrapper index

    soundsTimelineDict[seaWrapperIndex].loop.stop();
    soundsTimelineDict[seaWrapperIndex].content.stop();

    soundsTimelineDict[seaWrapperIndex].transition.play();
    soundsTimelineDict[seaWrapperIndex].transition.fade(0, 1, 2000);

    translateCounter -= 4.4;

    // TODO bring back this
    // forceRemainingParagraphOpacity();

    // reset core variables
    seaWrapperIndex++;
    subtitleIndex = 0;
    isScrollBehaviorEnabled = false;

    paragraphsInWrapper =
        subtitleWrappers[seaWrapperIndex].querySelectorAll("p");

    remainingParagraphsBeforeNextContainer = Array.from(paragraphsInWrapper);

    // trigger opacity next seaWrapper
    // displayOpacityNextParagraphContainer(seaWrapperIndex);

    // if first seaWrapper paragraph , set opacity 0.6 to other children
    displayOpacityOtherParagraphs(remainingParagraphsBeforeNextContainer);

    // then trigger next content's voice
    soundsTimelineDict[seaWrapperIndex].content.play();
}

function displayOpacityOtherParagraphs(paragraphs) {
    const otherChildrenOpacityTimeline = gsap.timeline({ paused: true });

    console.log("HERE");

    otherChildrenOpacityTimeline.to(paragraphs, {
        duration: 0.7,
        opacity: 0.6,
        ease: Power3.easeInOut,
    });

    otherChildrenOpacityTimeline.play();
}

function displayOpacityNextParagraphContainer(index) {
    const nextSeaWrapperOpacityTimeline = gsap.timeline({ paused: true });

    nextSeaWrapperOpacityTimeline.to(subtitleWrappers[index], {
        duration: 1,
        opacity: 1,
        ease: Power3.easeInOut,
    });

    nextSeaWrapperOpacityTimeline.play();
}

function forceRemainingParagraphOpacity() {
    const paragraphsInWrapper =
        subtitleWrappers[seaWrapperIndex].querySelectorAll("p");

    const filteredParagraphs = Array.from(paragraphsInWrapper).filter(
        (paragraph) => !paragraph.classList.contains("displayed")
    );

    filteredParagraphs.forEach((_filteredParagraph) =>
        triggerSubtitleOpacity(subtitleWrappers[seaWrapperIndex])
    );
}

function displaySvgTrigger(index) {
    const displaySvgCta = gsap.timeline({ paused: true });

    displaySvgCta.to(seaWrapperTriggers[index], {
        duration: 1,
        opacity: 1,
        ease: Power3.easeInOut,
    });

    displaySvgCta.play();
}

audioEqualizer.addEventListener("click", () => {
    const localStorageEqualizerStatus = JSON.parse(
        localStorage.getItem("equalizerStatus")
    );

    console.log("localStorageEqualizerStatus", localStorageEqualizerStatus);

    triggerAllSoundsSystem(!localStorageEqualizerStatus);
});

function triggerAllSoundsSystem(status) {
    const soundTypes = ["content", "loop", "transition"];

    for (const key in soundsTimelineDict) {
        soundTypes.forEach((soundType) => {
            soundsTimelineDict[key][soundType].mute(status);
        });
    }
}

window.addEventListener("beforeunload", () => {
    console.log("unmount");
    return clearInterval(timeCodeInterval);
});
