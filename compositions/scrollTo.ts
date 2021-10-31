const VueScrollTo = require('vue-scrollto')

export const scrollToId = (id: string) => {
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
    container: '.app-main',
    offset: 0,
    lazy: true,
    duration: 10,
    onDone() {
      console.log('onDone')
    },
    onCancel() {
      console.log('onCancel')
    },
  }

  VueScrollTo.scrollTo(id, duration, options)
}
