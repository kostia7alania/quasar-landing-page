import { onMounted, onUnmounted, ref } from '@nuxtjs/composition-api'
import { findLink } from '@/layouts/constants/linksMap'
import { findLinkBottom } from '@/layouts/constants/linksMapBottom'
// import { IScroll } from '@/typings/quasarModels'
const handlers: Set<(position: number) => void> = new Set()

let tm: ReturnType<typeof setTimeout>

function runAllHandlers() {
  clearTimeout(tm)
  // const target = window?.event?.target as HTMLInputElement

  tm = setTimeout(() => {
    const position: number = window.pageYOffset // target?.scrollTop
    handlers.forEach((handler) => handler(position))
  }, 15)
}

if (process.client) {
  // .app-main
  // const targ = document.querySelector('html') as HTMLElement
  document.addEventListener('scroll', runAllHandlers)
}

export function useScrollEventTop() {
  const activeLink = ref('#section-1')

  const setActiveLink = (val: string) => {
    activeLink.value = val
  }

  const onScrollTop = (position: number) => {
    // top menu
    const foundLink = findLink(position)
    if (foundLink) setActiveLink(foundLink.id)
    // window.pageYOffset => is => e.position
    // console.log(el, target?.offsetHeight, arguments, event);
  }
  onMounted(() => handlers.add(onScrollTop))
  onUnmounted(() => handlers.delete(onScrollTop))

  return {
    activeLink,
  }
}

export function useScrollEventBottom() {
  const activeLinkBottom = ref('#sub-section-1')

  const setActiveLinkBottom = (val: string) => {
    activeLinkBottom.value = val
  }

  const onScrollBottom = (position: number) => {
    // bottom menu
    const foundLinkBottom = findLinkBottom(position)
    if (foundLinkBottom) setActiveLinkBottom(foundLinkBottom.id)
    // window.pageYOffset => is => e.position
    // console.log(el, target?.offsetHeight, arguments, event);
  }

  onMounted(() => handlers.add(onScrollBottom))
  onUnmounted(() => handlers.delete(onScrollBottom))

  return {
    activeLinkBottom,
  }
}
