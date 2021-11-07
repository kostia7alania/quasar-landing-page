<template>
  <div class="tw-sticky tw-top-30" style="letter-spacing: -0.528px">
    <div
      v-for="{ title, id } in linksMapBottom"
      :key="id"
      class="tw-my-4 ellipsis tw-cursor-pointer"
      :class="{
        'link--active tw-font-bold': id === activeLinkBottom,
      }"
      @click.prevent="scrollToId(id)"
    >
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { linksMapBottom } from '@/layouts/constants/linksMapBottom'

import { useScrollEventBottom } from '@/compositions/scrollEvent'
import { scrollToId } from '@/compositions/scrollTo'

export default defineComponent({
  name: 'ValuesScrollLinks',
  setup() {
    const { activeLinkBottom } = useScrollEventBottom()

    return {
      linksMapBottom,
      activeLinkBottom,
      scrollToId,
    }
  },
})
</script>
