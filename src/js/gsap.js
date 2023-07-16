
const menuToggleSound = document.querySelectorAll(".cta-home")
const navbar = document.querySelector(".navbar")
const triggerScreen = document.querySelectorAll(".cta-trigger")
const hamburger = document.querySelector(".hamburger")


let t1 = gsap.timeline({ paused: true });
let t2 = gsap.timeline({ paused: true });
let t3 = gsap.timeline({ paused: true });
let t4 = gsap.timeline({ paused: true });

let counter = 0

t1.to(".activate-sound-wrapper", {
  duration: 1,
  opacity: 1,
  bottom: '25%',
  ease: Power1.easeInOut,
});

t2.to(".activate-sound-wrapper", {
  duration: 1,
  bottom: '120%',
  display: 'none',
  ease: Power3.easeInOut,
});

t4.to(".nav-fullpage", {
  display: 'block',
  opacity: 1,
  duration: 1,
  ease: Power3.easeInOut,
});

hamburger.addEventListener('click', () => {
  if(hamburger.classList.contains('toggle')) {
    t4.timeScale(2);
    t4.reverse()

    hamburger.classList.toggle("toggle");
    return
  }

  t4.play()
  hamburger.classList.toggle("toggle");
})

triggerScreen.forEach(trigger => {
  trigger.addEventListener('click', () => triggerNextScreen(counter))
})


function triggerNextScreen(index) {
  t3.to(`.sea-wrapper-${index}`, {
    opacity: 0,
    display: 'none',
    duration: 1,
    ease: Power3.easeInOut,
  });

  t3.play()

  counter ++
} 


window.addEventListener('load', () => {
    t1.play()
})

menuToggleSound.forEach(toggle => {
    toggle.addEventListener('click', () => {
        navbar.classList.add('display-navbar')
        t2.play()
    })
})

gsap.registerPlugin(ScrollTrigger);


const videoContainers = document.querySelectorAll('.sea-wrapper');

videoContainers.forEach((video, index) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top bottom",
    end: "+=199%",
    onEnter: () => {
        console.log('enters')
    //     if(index === 0) {
    //         gsap.to(videoContainers[0], { opacity: 1, duration: 1 }); 
    //         console.log('enters')
    //         return 
    //     }
    //     console.log('enters')
    //   gsap.to(videoContainers[index], { opacity: 1, duration: 1 }); 

    //   gsap.to(videoContainers[index - 1], { opacity: 0, duration: 1 }); // Fade out the current video

    },
    onLeaveBack: () => {
      gsap.to(video, { opacity: 0, duration: 1 }); // Fade out the current video
      console.log('leaves')
    }
  });
});





// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let panels = gsap.utils.toArray(".video-container"),
//     observer = ScrollTrigger.normalizeScroll(true),
//     scrollTween;

// // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
// document.addEventListener("touchstart", e => {
//   if (scrollTween) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// }, {capture: true, passive: false})

// function goToSection(i) {
//   scrollTween = gsap.to(window, {
//     scrollTo: {y: i * innerHeight, autoKill: false},
//     onStart: () => {
//       observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
//       observer.enable();
//     },
//     duration: 1,
//     onComplete: () => scrollTween = null,
//     overwrite: true
//   });
// }

// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top bottom",
//     end: "+=199%",
//     onToggle: self => self.isActive && !scrollTween && goToSection(i)
//   });
// });

// // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
// ScrollTrigger.create({
//   start: 0, 
//   end: "max",
//   snap: 1 / (panels.length - 1)
// })