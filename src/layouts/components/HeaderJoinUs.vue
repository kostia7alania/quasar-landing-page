<template>
  <div
    style="width: 55px"
    class="tw-text-center tw-flex tw-justify-center tw-relative"
  >
    <button
      :class="classComputed"
      class="tw-z-50"
      style="height: 42px"
      :style="isActiveContacts ? 'width: 42px' : 'border-radius: 33px'"
      @click="setIsActiveContacts(!isActiveContacts)"
    >
      <div style="width: 55px" v-show="!isActiveContacts">Join Us</div>
      <transition name="fade" mode="out-in">
        <svg
          v-show="isActiveContacts"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10.5862L16.95 5.63623L18.364 7.05023L13.414 12.0002L18.364 16.9502L16.95 18.3642L12 13.4142L7.04999 18.3642L5.63599 16.9502L10.586 12.0002L5.63599 7.05023L7.04999 5.63623L12 10.5862Z"
            fill="white"
          />
        </svg>
      </transition>
    </button>
    <HeaderModal v-if="isActiveContacts" @close="isActiveContacts = false" />
  </div>
</template>

<script lang="ts">
import HeaderModal from './HeaderModal.vue';

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'HeaderJoinUs',
  components: { HeaderModal },
  setup() {
    const isActiveContacts = ref(false);

    const setIsActiveContacts = (val: boolean) => {
      isActiveContacts.value = val;
    };

    return {
      isActiveContacts,
      setIsActiveContacts,
    };
  },
  computed: {
    classComputed() {
      if (this.isActiveContacts)
        return 'tw-text-black tw-bg-black tw-rounded-full tw-flex tw-justify-center tw-items-center';
      return 'bg-color-primary tw-text-white tw-font-bold tw-py-2 tw-px-6 box-shadow-1';
    },
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
