<template>
  <div>
    <div
      style="width: 333px; height: 240px"
      class="
        tw-modal-container tw-bg-white tw-absolute tw-right-2 tw-top-14
        tw-md:max-w-md
        tw-mx-auto tw-rounded-md tw-shadow-lg tw-z-50 tw-overflow-y-auto
      "
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <Contacts class="tw-modal-content tw-py-4 tw-text-left tw-px-6" />
    </div>

    <!--Modal-->
    <div
      class="
        the-modal
        tw-fixed
        tw-w-full
        tw-h-full
        tw-top-0
        tw-left-0
        tw-flex
        tw-items-center
        tw-justify-center
      "
    >
      <div
        class="tw-absolute tw-w-full tw-h-full tw-bg-gray-900 tw-opacity-50"
        @click="close"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  SetupContext,
  // ComponentPropsOptions,
} from '@nuxtjs/composition-api'

import Contacts from '@/components/Contacts.vue'

interface IKeyboardEvent {
  keyCode: number
}

export default defineComponent({
  name: 'HeaderModal',
  components: {
    Contacts,
  },
  emits: ['close'],
  setup(_, { emit }: SetupContext) {
    const close = () => {
      emit('close')
    }

    const keydownHandler = ({ keyCode }: IKeyboardEvent): void => {
      if ([27, 13].includes(keyCode)) close()
    }

    onMounted(() => {
      document.body.classList.add('tw-overflow-hidden')
      document.addEventListener('keydown', keydownHandler)
    })

    onUnmounted(() => {
      document.body.classList.remove('tw-overflow-hidden')
      document.removeEventListener('keydown', keydownHandler)
    })
    return {
      close,
    }
  },
})
</script>

<style lang="scss">
.the-modal {
  transition: opacity 0.25s ease;
}
</style>
