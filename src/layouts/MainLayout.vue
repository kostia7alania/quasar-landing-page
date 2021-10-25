<template>
  <q-layout ref="layout" @scroll="scrollHandler" class="main-layout tw-mx-auto">
    <MainHeader
      :links="links"
      :activeLink="activeLink"
      @scrollToLink="scrollToLink"
    />
    <main class="app-main">
      <PerfectScrollbar @ps-scroll-y="onScroll" ref="scrollbar">
        <router-view />
      </PerfectScrollbar>
    </main>
  </q-layout>
</template>

<script lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

import MainHeader from './components/MainHeader.vue';

import { defineComponent, ref, onMounted, SetupContext } from 'vue';

import { IScroll } from 'src/typings/quasarModels';

import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

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
  props: {
    scroll: Object,
  },
  components: { MainHeader, PerfectScrollbar },
  setup(_, ctx: SetupContext) {
    const links = ref(linksMap);
    const activeLink = ref('#section-1');

    const setActiveLink = (val: string) => {
      activeLink.value = val;
    };

    interface IRef {
      $el: HTMLElement;
    }
    const scrollbar = ref<IRef | HTMLElement | null | HTMLInputElement>(null);
    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      // const el = res?.$el;
      // console.log(el, scrollbar.value); // <div>This is a root element</div>
    });

    const scrollHandler = ({ position }: IScroll) => {
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
        if (position >= sectionTop - 100 - sectionHeight / 3) {
          setActiveLink(sectionSelector);
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
    };
    // takes an element object
    function scrollToElement(el: HTMLElement) {
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 1000;

      // const res3 = scrollbar.value as IRef; // ?.$el; // ?.scrollTop;
      // res3.$el.scrollTop = offset;
      console.log(target);
      const targ = document.querySelector('.ps') as HTMLElement;
      setVerticalScrollPosition(targ, offset, duration);
    }

    return {
      scrollbar,
      links,
      activeLink,
      scrollToLink(val: string) {
        const domEl = document.querySelector(val) as HTMLElement;
        scrollToElement(domEl);
        setActiveLink(val);
      },
      setActiveLink,

      onScroll(event: Event) {
        // debugger;
        const res = scrollbar.value as IRef; // ?.$el; // ?.scrollTop;
        const el = +res.$el?.scrollTop;
        const args = { position: el };
        scrollHandler(args);
        // const target = event.target as HTMLInputElement;
        // console.log(el, target?.offsetHeight, arguments, event);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 1920px;
}
</style>

<style>
.ps {
  height: calc(100vh - 99px);
}
</style>
