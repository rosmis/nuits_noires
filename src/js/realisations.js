const categoryWrappers = document.querySelectorAll(".category-wrapper")
const triggers = document.querySelectorAll('.controller')

const triggerContentPrevious = document.querySelector('.title-previous')
const triggerContentNext = document.querySelector('.title-next')

//HOVER STATE CONTROLLERS

const triggerTimelines = {
  left: {
    outer: {
      timeline: gsap.timeline({defaults: {duration: 0.2}, paused: true}),
      triangle: document.getElementById(`left_outer_triangle`),
    },
    inner: {
      timeline: gsap.timeline({defaults: {duration: 0.2}, paused: true}),
      triangle: document.getElementById(`left_inner_triangle`),
    },
  },

  right: {
    outer: {
      timeline: gsap.timeline({defaults: {duration: 0.2}, paused: true}),
      triangle: document.getElementById(`right_outer_triangle`),
    },
    inner: {
      timeline: gsap.timeline({defaults: {duration: 0.2}, paused: true}),
      triangle: document.getElementById(`right_inner_triangle`),
    },
  }
} 

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', () => {
    if(trigger.classList.contains('next')) {
      const nextIndex = (currentIndex + 1) % slides.length;
      triggerContentNext.innerHTML = triggerTitles[nextIndex]

      playSvgTriggerAnimation('right').play()
      return
    }
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    triggerContentPrevious.innerHTML = triggerTitles[prevIndex]

    playSvgTriggerAnimation('left').play()
  })

  trigger.addEventListener('mouseleave', () => {
    if(trigger.classList.contains('next')) {
      playSvgTriggerAnimation('right').reverse()
      return
    }
    
    playSvgTriggerAnimation('left').reverse()
  })
})

function playSvgTriggerAnimation(trigger) {
  const outerTimeline = triggerTimelines[trigger]['outer'].timeline
  const innerTimeline = triggerTimelines[trigger]['inner'].timeline

  outerTimeline.to(triggerTimelines[trigger]['outer'].triangle, {morphSVG:{
    shape: `#${trigger}_outer_circle`,
  }}, {
    ease: Power4.easeInOut,
  })

  innerTimeline.to(triggerTimelines[trigger]['inner'].triangle, {morphSVG:{
    shape: `#${trigger}_inner_circle`,
  }}, {
    ease: Power4.easeInOut,
  })

  return {
    play: () => {
      outerTimeline.play()
      innerTimeline.play()
    },
    reverse: () => {
      outerTimeline.reverse()
      innerTimeline.reverse()
    },
  }
}

//DISPLAY NEXT SLIDE STATE

const slides = gsap.utils.toArray('.category-wrapper');
const triggerTitles = ['Culturel', 'Marque', 'Art Vivant', 'Patrimoine']
let currentIndex = 0;

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    if(trigger.classList.contains('next')) {
      showNextSlide()
      return
    }

    showPrevSlide()
  })
})


function showSlide(index) {
  gsap.to(slides[currentIndex], { opacity: 0, zIndex: 0 });
  gsap.to(slides[index], { opacity: 1, zIndex: 1 });
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

document.addEventListener('wheel', () => console.log('scroll'))