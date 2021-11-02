// type ILinksMap = Array<{ title: string; id: string }>

export const linksMap = [
  { title: 'Top', id: '#section-1' },
  { title: 'About Us', id: '#section-2' },
  { title: 'Technology products', id: '#section-3' },
  { title: 'Team', id: '#section-4' },
  { title: 'Join Us', id: '#section-5' },
  { title: 'Contacts', id: '#section-6' },
]
const reversedLinksMap = [...linksMap].reverse()

export const findLink = (position: number) => {
  const foundLink = reversedLinksMap.find(({ id }) => {
    const sectionDom = document.querySelector(id) as HTMLElement
    const { offsetTop: sectionTop, clientHeight: sectionHeight } = sectionDom
    if (position >= sectionTop - 100 - sectionHeight / 3) return true
    return false
  })
  return foundLink
}
export default linksMap
