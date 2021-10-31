<template>
  <div class="tw-sticky tw-top-6" style="letter-spacing: -0.528px">
    <div
      v-for="{ title, id } in linksMapBottom"
      :key="id"
      class="tw-my-4"
      :class="{
        'link--active tw-font-bold': id === activeLinkBottom,
        'tw-cursor-pointer': id !== activeLinkBottom,
      }"
      @click.prevent="scrollToLink(id)"
    >
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { linksMapBottom } from '@/layouts/constants/linksMapBottom'

import { useScrollEvent } from '@/compositions/scrollEvent'

export default defineComponent({
  name: 'ValuesScrollLinks',
  setup() {
    const { activeLinkBottom, scrollToLink } = useScrollEvent()

    return {
      linksMapBottom,
      activeLinkBottom,
      scrollToLink,
    }
  },
})
</script>
