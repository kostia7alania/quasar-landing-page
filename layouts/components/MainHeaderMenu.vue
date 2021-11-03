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
            @click.prevent="scrollToId(id)"
          >
            {{ title }}
          </a>
        </li>
      </ul>
    </nav>
    <MainHeaderMenuMobile
      class="tw-block md:tw-hidden"
      :active-link="activeLink"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import MainHeaderMenuMobile from './MainHeaderMenuMobile.vue'
import { linksMap } from '@/layouts/constants/linksMap'

import { useScrollEventTop } from '@/compositions/scrollEvent'
import { scrollToId } from '@/compositions/scrollTo'

export default defineComponent({
  name: 'MainHeaderMenu',
  components: {
    MainHeaderMenuMobile,
  },
  setup(/* _, ctx: SetupContext */) {
    const { activeLink } = useScrollEventTop()
    return { linksMap, scrollToId, activeLink }
  },
})
</script>
