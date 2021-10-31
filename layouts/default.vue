<template>
  <div>
    <MainHeader class="max-layout-width tw-mx-auto" />
    <main class="app-main">
      <div class="max-layout-width tw-mx-auto">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import MainHeader from './components/MainHeader.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { MainHeader },
})
</script>

<style lang="scss" scoped>
.max-layout-width {
  max-width: 1920px;
}

.app-main {
  overflow: auto;
  height: calc(100vh - 99px);
}
</style>
