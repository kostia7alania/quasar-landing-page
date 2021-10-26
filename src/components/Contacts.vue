<template>
  <div class="">
    <!--Title-->
    <div class="tw-flex tw-justify-between tw-items-center tw-pb-3">
      <div
        style="letter-spacing: -1.584px; font-size: 48px"
        class="tw-mt-2 tw-font-bold"
      >
        Contacts
      </div>
    </div>
    <!--Body-->
    <div class="text-black-2">Dubai</div>
    <div class="tw-text-base tw-font-bold">
      <div class="tw-mt-1">
        <a href="tel:+97 156 870 1455">+97 156 870 1455</a>
      </div>
      <div class="tw-mt-1">
        <a href="mailTo:accuratemeta@gmail.com">accuratemeta@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contacts',
});
</script>
