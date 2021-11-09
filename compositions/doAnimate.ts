import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { batchAnimate, batchAnimateWithLeave } from './bachAnimate'

export function doAnimate(): void {
  // if (process.env.CLIENT) {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.logo-wrapper', {
    scrollTrigger: '.logo-wrapper',
    x: 0,
    rotation: 360,
    duration: 3,
  })

  batchAnimate('.anim-batch-once')
  // NOTE: it must be opacity: 0
  batchAnimateWithLeave('.anim-batch')

  const tl = gsap.timeline()

  tl.to('.main-title', { duration: 0.5, x: -10 })
  tl.to('.main-description', { duration: 0.25, x: 10 })
  tl.from('.main-image', { duration: 0.7, y: 10, stagger: 1 })

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: 'img',
  //       start: 'top 100%',
  //       end: 'top 80%',
  //       scrub: 1,
  //     },
  //   })
  //   .from('img', { y: 150, duration: 0.1, ease: 'none' })

  const block = gsap.utils.toArray('.scroll-blur-bottom')
  block.forEach((blockEl) => {
    ScrollTrigger.create({
      trigger: blockEl as string,
      toggleClass: 'scroll-blur-bottom__inactive',
      start: 'top 100%',
      end: 'top 80%',
      // markers:true
    })
  })

  /* */
  const sections = [
    // { node: '#section-2 .block-1', trigger: '#section-2' },
    { node: '#section-2 .block-2', trigger: '#section-2' },
    { node: '#section-2 .block-3__title', trigger: '#section-2 .block-2' },
    {
      node: '#section-2 .block-3__description',
      trigger: '#section-2 .block-2',
    },
    { node: '#section-2 .block-4__title', trigger: '#section-2 .block-2' },
    {
      node: '#section-2 .block-4__description',
      trigger: '#section-2 .block-2',
    },
    { node: '#section-2 .block-5__title', trigger: '#section-2 .block-2' },
    {
      node: '#section-2 .block-5__description',
      trigger: '#section-2 .block-2',
    },
    { node: '#section-2 .block-6', trigger: '#section-2 .block-2' },
    //,
    { node: '#section-3 .block-1', trigger: '#section-3 .block-1' },
    { node: '#section-3 .block-2', trigger: '#section-3 .block-2' },
    {
      node: '#section-3 .section-3-block-1',
      trigger: '#section-3 .section-3-block-1',
    },
    {
      node: '#section-3 .section-3-block-1__icon',
      trigger: '#section-3 .section-3-block-1',
    },
    {
      node: '#section-3 .section-3-block-1__text',
      trigger: '#section-3 .section-3-block-1',
    },
    {
      node: '#section-3 .section-3-block-1__svg',
      trigger: '#section-3 .section-3-block-1',
    },
  ]
  sections.forEach(({ node }) => {
    gsap.from(node, {
      scrollTrigger: {
        trigger: node,
        start: 20,
      },
      duration: 1,
      xPercent: 20,
    })
  })

  /**
   *
   */
  // const clamper = gsap.utils.clamp(-10, 10)
  // const proxy = { yPercent: 0 }
  // const yPercentSetter = gsap.quickSetter('.logo', 'yPercent')

  // ScrollTrigger.create({
  //   trigger: '.logo-wrapper',
  //   pin: true,
  //   end: () => `+=${window.innerHeight * 1.1}`,
  //   onUpdate: ({ getVelocity }) => {
  //     const yPercent = clamper(getVelocity() / 50)
  //     if (Math.abs(yPercent) > Math.abs(proxy.yPercent)) {
  //       proxy.yPercent = yPercent
  //       gsap.to(proxy, {
  //         duration: 1,
  //         ease: 'power3',
  //         onUpdate: () => {
  //           console.log(proxy.yPercent)
  //           yPercentSetter(proxy.yPercent)
  //         },
  //         overwrite: true,
  //         yPercent: 0,
  //       })
  //     }
  //   },
  // })

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '.section-3-block-1',
  //       start: 'center center',
  //       // end: 'bottom top',
  //       scrub: 1,
  //       pin: true,
  //     },
  //   })
  //   .from('.section-3-block-1__svg', {
  //     x: innerWidth * -1,
  //   })
  //   .from('section-3-block-1__text', {
  //     x: innerWidth * 1,
  //   })
  //   .from('.section-3-block-1__icon', {
  //     x: innerWidth * 1,
  //   })
  // .from('#section-2 .block-4', {
  //   x: innerWidth * -1,
  // })
  // .from('#section-2 .block-5', {
  //   x: innerWidth * 1,
  //   // rotate: 360,
  // })
  // .from('#section-2 .block-6', {
  //   x: innerWidth * -1,
  //   rotate: 360,
  // })

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '#section-2',
  //       start: 'center center',
  //       end: 'bottom top',
  //       scrub: 1,
  //       pin: true,
  //     },
  //   })
  //   .from('#section-2', {
  //     opacity: 0,
  //   })
  // .from('.office-location__content', {
  //   y: innerHeight * 1,
  //   stagger: {
  //     amount: 0.5,
  //   },
  // })

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '.office-location__content',
  //       start: 'top 100%',
  //       end: 'top 80%',
  //       scrub: 1,
  //     },
  //   })
  //   .from('.office-location__content', { y: 10, duration: 0.1, ease: 'none' })

  // // @ts-ignore
  // window.st = ScrollTrigger.create({
  //   trigger: '.logo-wrapper',
  //   start: 'top center',
  //   end: '+=500',
  // })

  // gsap.to('.logo-wrapper', {
  //   scrollTrigger: '.logo-wrapper',
  //   x: 0,
  //   rotation: 360,
  //   duration: 3,
  // })
  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '.main-title',
  //       start: 'top 90%',
  //       end: 'top 40%',
  //       scrub: 1,
  //     },
  //   })
  //   .from('.main-title', { y: 150, duration: 1, ease: 'none' })

  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.office-location',
  //     // start: 'center bottom',
  //     // // end: 'bottom 100px',
  //     // // end: '+=300',
  //     // end: () => {
  //     //   const el = document.querySelector('.logo-wrapper') as HTMLElement
  //     //   return '+=' + el.offsetWidth
  //     // },
  //     // scrub: 1,
  //     // markers: true,
  //     // toggleActions: 'restart pause reverse pause',
  //   },
  // })

  /**
   *
   *
   */

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '.office-location__content',
  //       start: 'center bottom',
  //       end: 'bottom 0px',
  //       scrub: 1,
  //     },
  //   })
  //   .from('.office-location__content', { y: 30, duration: 1, ease: 'none' })

  /**
   *
   *
   */
  // mapTop.from('.office-location__content', {
  //   x: 200,
  //   opacity: 0,
  //   duration: 0.8,
  // })
  // // .from('.map-top', { x: 300, opacity: 0, duration: 0.5 }, '-=1')
  // //
  // const proxy = { skew: 0 }
  // const skewSetter = gsap.quickSetter(
  //   '.block-chain-cartoon-icon',
  //   'skewY',
  //   'deg'
  // ) // fast
  // const clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

  // ScrollTrigger.create({
  //   onUpdate: (self) => {
  //     const skew = clamp(self.getVelocity() / -300)
  //     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
  //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
  //       proxy.skew = skew
  //       gsap.to(proxy, {
  //         skew: 0,
  //         duration: 0.8,
  //         ease: 'power3',
  //         overwrite: true,
  //         onUpdate: () => skewSetter(proxy.skew),
  //       })
  //     }
  //   },
  // })

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  // gsap.set('.block-chain-cartoon-icon', {
  //   transformOrigin: 'right center',
  //   force3D: true,
  // })
}
