import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function doAnimate(): void {
  // if (process.env.CLIENT) {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  gsap.to('.logo-wrapper', {
    scrollTrigger: '.logo-wrapper',
    x: 0,
    rotation: 360,
    duration: 3,
  })
}
