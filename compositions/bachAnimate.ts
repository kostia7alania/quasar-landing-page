import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const batchAnimate = (selector: string) => {
  // NOTE: the node with the selector must be opacity: 0
  gsap.defaults({ ease: 'power3' })
  gsap.set(selector, { y: 100 })

  ScrollTrigger.batch(selector, {
    // interval: 0.1, // time window (in seconds) for batching to occur.
    // batchMax: 3,   // maximum batch size (targets)
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: { each: 0.15, grid: [1, 3] },
        overwrite: true,
      }),
  })
  ScrollTrigger.addEventListener('refreshInit', () => {
    gsap.set(selector, { y: 0 })
  })
}

export const batchAnimateWithLeave = (selector: string) => {
  // NOTE: the node with the selector must be opacity: 0
  gsap.defaults({ ease: 'power3' })
  gsap.set(selector, { y: 100 })

  ScrollTrigger.batch(selector, {
    // interval: 0.1, // time window (in seconds) for batching to occur.
    // batchMax: 3,   // maximum batch size (targets)
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: { each: 0.15, grid: [1, 3] },
        overwrite: true,
      }),
    onLeave: (batch) =>
      gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
    onEnterBack: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
      gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    // you can also define things like start, end, etc.
  })

  // when ScrollTrigger does a refresh(), it maps all the positioning data which
  // factors in transforms, but in this example we're initially setting all the ".box"
  // elements to a "y" of 100 solely for the animation in which would throw off the normal
  // positioning, so we use a "refreshInit" listener to reset the y temporarily. When we
  // return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
  // ts
  ScrollTrigger.addEventListener('refreshInit', () => {
    gsap.set(selector, { y: 0 })
  })
}
