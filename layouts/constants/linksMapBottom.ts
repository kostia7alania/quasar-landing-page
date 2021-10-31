// type ILinksMap = Array<{ title: string; id: string }>

export const linksMapBottom = [
  { title: 'Our values', id: '#sub-section-1' },
  { title: 'Open a multi-diverse office environment', id: '#sub-section-2' },
  { title: 'Everyone has a growing opportunity', id: '#sub-section-3' },
  { title: 'Company employee benefits', id: '#sub-section-4' },
]

const reversedLinksMapBottom = [...linksMapBottom].reverse()

export const findLinkBottom = (position: number) => {
  const foundLink = reversedLinksMapBottom.find(({ id }) => {
    const sectionDom = document.querySelector(id) as HTMLElement
    const { offsetTop: sectionTop, clientHeight: sectionHeight } = sectionDom
    if (position >= sectionTop - 100 - sectionHeight / 3) return true
    return false
  })
  return foundLink
}
export default linksMapBottom
