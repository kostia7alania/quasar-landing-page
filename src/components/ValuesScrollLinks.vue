<template>
  <div class="tw-sticky tw-top-6" style="letter-spacing: -0.528px">
    <div
      class="tw-my-4"
      v-for="[link, id] in links"
      :key="link"
      :class="{
        'link--active tw-font-bold': id === activeLink,
        'tw-cursor-pointer': id !== activeLink,
      }"
      @click.prevent="scrollToLink(id)"
    >
      {{ link }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

import { IScroll } from 'src/typings/quasarModels';

import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

const linksMap = [
  'Our values',
  'Open a multi-diverse office environment',
  'Everyone has a growing opportunity',
  'Company employee benefits',
].map((e, i) => [e, `#sub-section-${i + 1}`]);

export default defineComponent({
  setup() {
    const links = ref(linksMap);
    const activeLink = ref('#sub-section-1');

    const setActiveLink = (val: string) => {
      activeLink.value = val;
    };

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

    const onScroll = (event: Event) => {
      // debugger;
      // const res = scrollbar.value; // ?.$el; // ?.scrollTop;
      // const el = +res.$el?.scrollTop;
      const target = event.target as HTMLInputElement;
      const args = { position: target?.scrollTop };
      scrollHandler(args);
      // console.log(target?.scrollTop, arguments, event);
    };

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      // const el = res?.$el;
      // console.log(el, scrollbar.value); // <div>This is a root element</div>
      const targ = document.querySelector('.ps') as HTMLElement;
      targ.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      const targ = document.querySelector('.ps') as HTMLElement;
      targ.removeEventListener('scroll', onScroll);
    });
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
      links,
      activeLink,
      scrollToLink(val: string) {
        const domEl = document.querySelector(val) as HTMLElement;
        scrollToElement(domEl);
        // setActiveLink(val);
      },
    };
  },
  name: 'ChatSoftwareCartoon',
});
</script>
