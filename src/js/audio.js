const audioWrapper = document.querySelector(".audio-wrapper");
const playButton = document.querySelector(".cta-play");
const playToggle = document.getElementById("playToggle");

window.addEventListener("DOMContentLoaded", () => {
    const postId = post.id;

    fetch(`https://nuitsnoires.com/wp-json/acf/v3/realisations/${postId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            wavesurfer.load(data.acf.audio);
        })
        .catch((error) => {
            console.error("Error fetching ACF field:", error);
        });
});

const options = {
    container: audioWrapper,
    height: 70,
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
