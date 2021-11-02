<template>
  <div>
    <nav
      class="tw-hidden md:tw-block navbar tw-font-bold"
      style="max-width: 1110px"
    >
      <ul class="navbar-items tw-flex tw-gap-3 lg:tw-gap-8">
        <li v-for="{ title, id } in linksMap" :key="id" class="link-item">
          <a
            :class="{ 'link--active': id === activeLink }"
            :href="id"
            @click.prevent="scrollToLink(id)"
          >
            {{ title }}
          </a>
        </li>
      </ul>
    </nav>
    <MainHeaderMenuMobile
      class="tw-block md:tw-hidden"
      :active-link="activeLink"
      @scrollToLink="scrollToLink"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import MainHeaderMenuMobile from './MainHeaderMenuMobile.vue'
import { linksMap } from '@/layouts/constants/linksMap'

import { useScrollEvent } from '@/compositions/scrollEvent'

export default defineComponent({
  name: 'MainHeaderMenu',
  components: {
    MainHeaderMenuMobile,
  },
  setup(/* _, ctx: SetupContext */) {
    const { scrollToLink, activeLink } = useScrollEvent()
    return { linksMap, scrollToLink, activeLink }
  },
})
</script>
