<template>
  <div
    style="width: 333px; height: 240px"
    class="
      tw-modal-container tw-bg-white tw-absolute tw-right-2 tw-top-14
      tw-md:max-w-md
      tw-mx-auto tw-rounded-md tw-shadow-lg tw-z-50 tw-overflow-y-auto
    "
  >
    <!-- Add margin if you want to see some of the overlay behind the modal-->
    <div class="tw-modal-content tw-py-4 tw-text-left tw-px-6">
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
      @click="close"
      class="tw-absolute tw-w-full tw-h-full tw-bg-gray-900 tw-opacity-50"
    ></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  SetupContext,
  // ComponentPropsOptions,
} from 'vue';

interface IKeyboardEvent {
  keyCode: number;
}

export default defineComponent({
  name: 'HeaderModal',
  emits: ['close'],
  setup(_, { emit }: SetupContext) {
    const close = () => {
      emit('close');
    };

    const keydownHandler = ({ keyCode }: IKeyboardEvent): void => {
      if ([27, 13].includes(keyCode)) close();
    };

    onMounted(() => {
      document.body.classList.add('tw-overflow-hidden');
      document.addEventListener('keydown', keydownHandler);
    });

    onUnmounted(() => {
      document.body.classList.remove('tw-overflow-hidden');
      document.removeEventListener('keydown', keydownHandler);
    });
    return {
      close,
    };
  },
});
</script>

<style lang="scss">
.the-modal {
  transition: opacity 0.25s ease;
}
</style>
