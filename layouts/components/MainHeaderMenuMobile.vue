<template>
  <div
    style="width: 55px"
    class="tw-text-center tw-flex tw-justify-center tw-relative"
  >
    <button
      :class="classComputed"
      class="anim-batch-once button__join-us"
      :style="isActiveModal ? 'width: 42px' : 'border-radius: 33px'"
      @click="setIsActiveContacts(!isActiveModal)"
    >
      <svg
        v-show="!isActiveModal"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#C7D2FE"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-show="isActiveModal"
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
    </button>
    <HeaderModal
      v-if="isActiveModal"
      height="280px"
      @close="isActiveModal = false"
    >
      <ul class="navbar-items tw-flex tw-flex-col tw-text-left">
        <li
          v-for="{ title, id } in linksMap"
          :key="id"
          class="link-item tw-my-2.2 tw-mx-4"
          @click.prevent="scrollToLink(id)"
        >
          <a
            :class="{ 'link--active': id === activeLink }"
            :href="id"
            @click.prevent
          >
            {{ title }}
          </a>
        </li>
      </ul>
    </HeaderModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import HeaderModal from './HeaderModal.vue'
import { linksMap } from '@/layouts/constants/linksMap'
import { scrollToId } from '@/compositions/scrollTo'

export default defineComponent({
  name: 'HeaderJoinUs',
  components: { HeaderModal },
  props: {
    activeLink: {
      type: String,
      default: '',
    },
  },
  setup(/* _, { emit } */) {
    const isActiveModal = ref(false)

    const setIsActiveContacts = (val: boolean) => {
      isActiveModal.value = val
    }
    const scrollToLink = (id: string) => {
      scrollToId(id)
      setIsActiveContacts(false)
    }
    return {
      isActiveModal,
      setIsActiveContacts,
      scrollToLink,
      linksMap,
    }
  },
  computed: {
    classComputed() {
      if (this.isActiveModal)
        return 'tw-text-black tw-bg-black tw-rounded-full tw-flex tw-justify-center tw-items-center tw-z-50'
      return ' tw-text-white tw-font-bold  tw-py-2 tw-px-6 box-shadow-1'
    },
  },
})
</script>

<style lang="scss" scoped>
.button__join-us {
  height: 42px;
  transition: 1s;
  &:hover {
    color: #000019;
    svg path {
      stroke: blue;
    }
  }
  &:active {
    transition: 0.2s;
    transform: scale(0.9);
    color: blue;
  }
}
</style>
