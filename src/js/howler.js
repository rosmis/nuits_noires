const menuToggleAudio = document.querySelectorAll(".cta-home");
const seaWrapperTriggers = document.querySelectorAll(".svg-trigger");

const subtitleWrappers = document.querySelectorAll(".subtitles-wrapper");

const timeCodeSubtitlesDict = {
    0: [0, 5, 11, 16, 21],
    1: [],
    2: [],
    3: [],
};

let subtitleIndex = 0;
let seaWrapperIndex = 0;
let translateCounter = 0;

const loop1 = new Howl({
    src: [
        "http://localhost:10003/wp-content/uploads/2023/09/Loop_Strate_1.ogg",
    ],
    loop: true,
});

const transition1 = new Howl({
    src: ["http://localhost:10003/wp-content/uploads/2023/09/Transition_1.ogg"],
    html5: true,
});

const part1 = new Howl({
    src: ["http://localhost:10003/wp-content/uploads/2023/09/Part_1_cut.ogg"],
    html5: true,
    mute: true,
    onend: () => {
        loop1.play();
        loop1.fade(0, 1, 5000);
    },
});

menuToggleAudio.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        // part1.seek(22);
        part1.play();
        // part1.on("seek", () => {
        //     const currentTime = part1.seek(); // Get the current playback timecode (in seconds)
        //     console.log("Current timecode: " + currentTime);
        // });
    });
});

const timeCodeInterval = setInterval(() => {
    const currentTimeCode = Math.round(part1.seek());

    if (
        timeCodeSubtitlesDict[seaWrapperIndex][subtitleIndex] <= currentTimeCode
    )
        triggerSubtitleOpacity(subtitleWrappers[seaWrapperIndex]);
}, 300);

function triggerSubtitleOpacity(wrapper) {
    console.log("trigger");
    const paragraphsInWrapper = wrapper.querySelectorAll("p");

    let subtitleTimeline = gsap.timeline({ paused: true });
    let subtitlesTranslateTimeline = gsap.timeline({ paused: true });

    subtitleTimeline.to(paragraphsInWrapper[subtitleIndex], {
        duration: 1,
        opacity: 1,
        ease: Power3.easeInOut,
    });

    subtitlesTranslateTimeline.to(subtitleWrappers, {
        duration: 1,
        transform: `translateY(${subtitleIndex * -1.5}em)`,
        ease: Power3.easeInOut,
    });

    translateCounter = subtitleIndex * -1.5;

    subtitleTimeline.play();
    subtitlesTranslateTimeline.play();

    subtitleIndex++;
}

// CLICK SVG STATE
seaWrapperTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        let subtitlesTranslateInterludeTimeline = gsap.timeline({
            paused: true,
        });

        subtitlesTranslateInterludeTimeline.to(subtitleWrappers, {
            duration: 1,
            transform: `translateY(${translateCounter - 7}em)`,
            ease: Power3.easeInOut,
        });

        subtitlesTranslateInterludeTimeline.play();

        translateCounter -= 7;

        seaWrapperIndex++;
    });
});

window.addEventListener("beforeunload", () => {
    console.log("unmount");
    return clearInterval(timeCodeInterval);
});
