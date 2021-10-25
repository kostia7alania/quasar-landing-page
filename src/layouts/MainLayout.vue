<template>
  <q-layout ref="layout" @scroll="scrollHandler" class="main-layout tw-mx-auto">
    <MainHeader
      :links="links"
      :activeLink="activeLink"
      @scrollToLink="scrollToLink"
    />
    <main class="app-main">
      <router-view />
    </main>
  </q-layout>
</template>

<script lang="ts">
import MainHeader from './components/MainHeader.vue';

import { defineComponent, ref } from 'vue';
// import '../extensions/tailwindcss/tailwind.css';

import { IScroll } from 'src/typings/quasarModels';

import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

// takes an element object
function scrollToElement(el: HTMLElement) {
  const target = getScrollTarget(el);
  const offset = el.offsetTop;
  const duration = 1000;
  setVerticalScrollPosition(target, offset, duration);
}

const linksMap = [
  'Top',
  'About Us',
  'Technology Products',
  'Team',
  'Join Us',
  'Contacts',
].map((e, i) => [e, `#section-${i + 1}`]);

export default defineComponent({
  name: 'MainLayout',
  components: { MainHeader },
  setup() {
    const links = ref(linksMap);
    const activeLink = ref('#section-1');

    const setActiveLink = (val: string) => {
      activeLink.value = val;
    };

    return {
      links,
      activeLink,
      scrollToLink(val: string) {
        const domEl = document.querySelector(val) as HTMLElement;
        scrollToElement(domEl);
        setActiveLink(val);
      },
      setActiveLink,
    };
  },
  data() {
    return {
      scroll,
    };
  },
  methods: {
    scrollHandler(e: IScroll) {
      /*
        delta: -3.33349609375
        direction: "up"
        directionChanged: false
        inflectionPoint: 7459.16650390625
        position: 7335.8330078125
      */
      linksMap.forEach(([, sectionSelector]) => {
        const sectionDom = document.querySelector(
          sectionSelector
        ) as HTMLElement;

        const { offsetTop: sectionTop, clientHeight: sectionHeight } =
          sectionDom;
        if (e.position >= sectionTop - 100 - sectionHeight / 3) {
          this.setActiveLink(sectionSelector);
        }
        // console.log('scrollHandler', {
        //   sectionSelector,
        //   position: e.position,
        //   sectionTop,
        //   sectionHeight,
        //   res1: sectionTop - sectionHeight,
        //   res2: sectionTop - sectionHeight / 2,
        //   res3: sectionTop - sectionHeight / 3,
        // });
      });

      // window.pageYOffset => is => e.position
    },
  },
});
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 1920px;
}
</style>
