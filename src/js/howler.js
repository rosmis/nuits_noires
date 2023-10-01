const menuToggleAudio = document.querySelectorAll(".cta-home");
const seaWrapperTriggers = document.querySelectorAll(".svg-trigger");

const subtitleWrappers = document.querySelectorAll(".subtitles-wrapper");
const ctaBottom = document.querySelector(".cta-subtitles");

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "+=100%",
    // markers: true,
});

// listen for potential scroll end from user and redirect to next seaWrapper section
ScrollTrigger.addEventListener("scrollStart", playNextSound);

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
    toggle.addEventListener("click", () => {
        soundsTimelineDict = {
            0: {
                content: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/09/Part_1_cut.ogg",
                    ],
                    html5: true,
                    // mute: true,
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
                        "http://localhost:10003/wp-content/uploads/2023/09/Loop_Strate_1.ogg",
                    ],
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/09/Transition_1.ogg",
                    ],
                }),
            },
            1: {
                content: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/10/Part_2.ogg",
                    ],
                    html5: true,
                    // mute: true,
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
                        "http://localhost:10003/wp-content/uploads/2023/10/Loop_Strate_2.ogg",
                    ],
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/10/Transition_2.ogg",
                    ],
                }),
            },
            2: {
                content: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/10/Part_3.ogg",
                    ],
                    html5: true,
                    // mute: true,
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
                        "http://localhost:10003/wp-content/uploads/2023/10/Loop_Strate_3.ogg",
                    ],
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/10/Transition_3.ogg",
                    ],
                }),
            },
            3: {
                content: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/10/Part_4.ogg",
                    ],
                    html5: true,
                    // mute: true,
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
                        "http://localhost:10003/wp-content/uploads/2023/10/Loop_Strate_4.ogg",
                    ],
                    loop: true,
                }),
                transition: new Howl({
                    src: [
                        "http://localhost:10003/wp-content/uploads/2023/10/Transition_3.ogg",
                    ],
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

    let subtitleTimeline = gsap.timeline({ paused: true });
    let subtitlesTranslateTimeline = gsap.timeline({ paused: true });

    subtitleTimeline.to(paragraphsInWrapper[subtitleIndex], {
        duration: 1,
        opacity: 1,
        ease: Power3.easeInOut,
    });

    translateCounter += subtitleIndex * -1.5;

    subtitlesTranslateTimeline.to(subtitleWrappers, {
        duration: 1,
        transform: `translateY(${translateCounter}em)`,
        ease: Power3.easeInOut,
    });

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
    let subtitlesTranslateInterludeTimeline = gsap.timeline({
        paused: true,
    });

    subtitlesTranslateInterludeTimeline.to(subtitleWrappers, {
        duration: 1,
        transform: `translateY(${translateCounter - 3}em)`,
        ease: Power3.easeInOut,
    });

    subtitlesTranslateInterludeTimeline.play();

    // trigger sound transition based on seaWrapper index

    soundsTimelineDict[seaWrapperIndex].loop.stop();
    soundsTimelineDict[seaWrapperIndex].content.stop();

    soundsTimelineDict[seaWrapperIndex].transition.play();
    soundsTimelineDict[seaWrapperIndex].transition.fade(0, 1, 3000);

    translateCounter -= 3;

    seaWrapperIndex++;

    subtitleIndex = 0;

    // then trigger next content's voice
    soundsTimelineDict[seaWrapperIndex].content.play();
}

window.addEventListener("beforeunload", () => {
    console.log("unmount");
    return clearInterval(timeCodeInterval);
});
