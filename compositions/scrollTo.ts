const VueScrollTo = require('vue-scrollto')
let scrollInProgress: boolean
let cancelScroll: () => void
let tm: ReturnType<typeof setTimeout>

export const scrollToId = (id: string) => {
  if (scrollInProgress) {
    cancelScroll()
    console.log('[scrollInProgress] call cancelScroll() ')
  }
  clearTimeout(tm)
  tm = setTimeout(() => {
    // const el = document.querySelector(id) as HTMLElement
    // const target = getScrollTarget(el)
    // const offset = el.offsetTop
    const duration = 1000

    // const res3 = scrollbar.value as IRef; // ?.$el; // ?.scrollTop;
    // res3.$el.scrollTop = offset;
    // console.log(target)
    // const targ = document.querySelector('.ps') as HTMLElement
    // setVerticalScrollPosition(targ, offset, duration)
    const options = {
      // container: '.app-main',
      container: 'html',
      offset: -100,
      lazy: true,
      duration: 10,
      onStart() {
        // scrolling started
        console.log('[scrollTo] onStart')
        scrollInProgress = true
      },
      onDone() {
        console.log('[scrollTo] onDone')
        scrollInProgress = false
      },
      onCancel() {
        console.log('[scrollTo] onCancel')
        scrollInProgress = false
      },
    }

    cancelScroll = VueScrollTo.scrollTo(id, duration, options)
  }, 100)
}
