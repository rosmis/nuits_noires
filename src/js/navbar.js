const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

let displayToggleSoundWrapperTimeline = gsap.timeline({ paused: true });
let toggleNavFullPageTimeline = gsap.timeline({ paused: true });


toggleNavFullPageTimeline.to(".nav-fullpage", {
    display: 'block',
    opacity: 1,
    duration: 1,
    ease: Power3.easeInOut,
});

window.addEventListener('load', () => {
    const toggleSoundWrapper = document.querySelector('.activate-sound-wrapper')
    if(!toggleSoundWrapper) {
      navbar.classList.add('display-navbar')
      navbar.classList.add('background')
      return
    }

    displayToggleSoundWrapperTimeline.to(".activate-sound-wrapper", {
        duration: 1,
        opacity: 1,
        bottom: '25%',
        ease: Power1.easeInOut,
      });
  
    displayToggleSoundWrapperTimeline.play()
})

hamburger.addEventListener('click', () => {
    if(hamburger.classList.contains('toggle')) {
      toggleNavFullPageTimeline.timeScale(2);
      toggleNavFullPageTimeline.reverse()
  
      hamburger.classList.toggle("toggle");
      return
    }
  
    toggleNavFullPageTimeline.play()
    hamburger.classList.toggle("toggle");
  })