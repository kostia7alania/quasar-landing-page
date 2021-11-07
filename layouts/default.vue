<template>
  <div>
    <div v-if="!isInit" class="tw-w-full tw-h-screen tw-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: #fff; display: block"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#e90c59"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#46dff0"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
        </circle>
      </svg>
    </div>
    <div v-if="isInit" class="dark:tw-bg-gray-800">
      <div class="main-header"></div>
      <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50">
        <MainHeader class="main-header max-layout-width tw-mx-auto" />
      </div>
      <!-- <main class="app-main"> -->
      <div ref="app" class="app-main">
        <div class="max-layout-width tw-mx-auto">
          <Nuxt />
        </div>
      </div>
      <!-- </main> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import MainHeader from './components/MainHeader.vue'
// import PerfectScrollbar from 'perfect-scrollbar'
// import 'perfect-scrollbar/css/perfect-scrollbar.css'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader,
  },
  setup() {
    const isInit = ref(false)

    onMounted(() => {
      isInit.value = true
    })
    return { isInit }
  },
  mounted() {
    // setTimeout(() => {
    // new PerfectScrollbar('body')
    // }, 500)
  },
})
</script>

<style lang="scss" scoped>
.max-layout-width {
  max-width: 1920px;
}

$heightLg: 99px;
$heightSm: 65px;

.main-header {
  height: $heightLg;
  @media (max-width: 770px) {
    height: $heightSm;
  }
}

.app-main {
  // overflow: auto;
  // height: calc(100vh - $heightLg);
  // margin-top: calc($heightLg);
  @media (max-width: 770px) {
    // height: calc(100vh - $heightSm);
    // margin-top: calc($heightSm);
  }
}
</style>
