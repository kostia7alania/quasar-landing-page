<template>
  <div class="">
    <!--Title-->
    <div
      v-if="!isHideTitle"
      class="tw-flex tw-justify-between tw-items-center tw-pb-3"
    >
      <div
        style="letter-spacing: -1.584px; font-size: 48px"
        class="tw-font-bold"
      >
        Contacts
      </div>
    </div>
    <!--Body-->
    <div class="text-black-2">Dubai</div>
    <div class="tw-text-base tw-font-bold">
      <div class="tw-mt-1">
        <a href="tel:+971 56 870 1455">+971 56 870 1455</a>
      </div>
      <div class="tw-mt-1">
        <a href="mailTo:accuratemeta@gmail.com">accuratemeta@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Contacts',
  props: {
    isHideTitle: { type: Boolean, default: false },
  },
})
</script>
