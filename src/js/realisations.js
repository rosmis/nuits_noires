const categoryWrapper = document.querySelectorAll(".category-wrapper")
const triggers = document.querySelectorAll('.controller')

//CONTROL HOVER STATE CONTROLLERS

let triggersTimeline = []
console.log('triggersLength', triggers.length)
triggers.forEach((_trigger, index) => {
  const outer_svg_timeline = gsap.timeline({defaults: {duration: 0.2}, paused: true}),
    outer_triangle = document.getElementById(`outer_triangle_${index}`);

  const inner_svg_timeline = gsap.timeline({defaults: {duration: 0.2}, paused: true}),
      inner_triangle = document.getElementById(`inner_triangle_${index}`);

    triggersTimeline.push({
      outer_svg: {
        timeline: outer_svg_timeline, 
        triangle: outer_triangle
      },
      inner_svg: {
        timeline: inner_svg_timeline, 
        triangle: inner_triangle
      },
    })
})


triggers.forEach((trigger, index) => {
  trigger.addEventListener('mouseenter', () => {
    playSvgTriggerAnimation(index).play()
    return console.log('index', index)
  })
})

triggers.forEach((trigger, index) => {
  trigger.addEventListener('mouseleave', () => {
    playSvgTriggerAnimation(index).reverse()
  })
})

function playSvgTriggerAnimation(index) {
  const innerTimeline = triggersTimeline[index].inner_svg.timeline
  const outerTimeline = triggersTimeline[index].outer_svg.timeline

  outerTimeline.to(triggersTimeline[index].outer_svg.triangle, {morphSVG:{
    shape: `#outer_circle_${index}`,
  }}, {
    ease: Power4.easeInOut,
  })

  innerTimeline.to(triggersTimeline[index].inner_svg.triangle, {morphSVG:{
    shape: `#inner_circle_${index}`,
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

let counter = 0
let realisationsTimeline = gsap.timeline({ paused: true });

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => triggerNextPage(counter, trigger))
})

  
function triggerNextPage(index, trigger) {
    const triggerState = trigger.className.split(' ')

    if(triggerState.includes('next')) 
    
    realisationsTimeline.to(categoryWrapper[index], {
        opacity: 0,
        display: 'none',
        duration: 1,
        ease: Power3.easeInOut,
    });

    realisationsTimeline.play()

    counter ++
} 