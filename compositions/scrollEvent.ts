import { onMounted, onBeforeUnmount, ref } from '@nuxtjs/composition-api'
import { findLink } from '@/layouts/constants/linksMap'
import { findLinkBottom } from '@/layouts/constants/linksMapBottom'

import { IScroll } from '@/typings/quasarModels'

import { scrollToId } from '@/compositions/scrollTo'

export function useScrollEvent() {
  const activeLink = ref('#section-1')
  const activeLinkBottom = ref('#sub-section-1')

  const setActiveLink = (val: string) => {
    activeLink.value = val
  }

  const setActiveLinkBottom = (val: string) => {
    activeLinkBottom.value = val
  }

  const scrollToLink = (id: string) => scrollToId(id)

  // setActiveLink(id)
  const onScroll = (event: Event) => {
    const target = event.target as HTMLInputElement
    const args = { position: target?.scrollTop }
    scrollHandler(args)
    // const target = event.target as HTMLInputElement;
    // console.log(el, target?.offsetHeight, arguments, event);
  }

  onMounted(() => {
    // the DOM element will be assigned to the ref after initial render
    // const el = res?.$el;
    // console.log(el, scrollbar.value); // <div>This is a root element</div>
    const targ = document.querySelector('.app-main') as HTMLElement
    targ.addEventListener('scroll', onScroll)
  })

  onBeforeUnmount(() => {
    const targ = document.querySelector('.app-main') as HTMLElement
    targ.removeEventListener('scroll', onScroll)
  })

  const scrollHandler = ({ position }: IScroll) => {
    // top menu
    const foundLink = findLink(position)
    if (foundLink) setActiveLink(foundLink.id)
    // bottom menu
    const foundLinkBottom = findLinkBottom(position)
    if (foundLinkBottom) setActiveLinkBottom(foundLinkBottom.id)
    // window.pageYOffset => is => e.position
  }

  return {
    scrollToLink,
    activeLink,
    activeLinkBottom,
  }
}
