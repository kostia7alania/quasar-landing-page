<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#416FF4',
      '--swiper-pagination-color': '#416FF4',
      '--swiper-pagination-bullet-width': '10px',
      '--swiper-pagination-bullet-height': '10px',
      '--swiper-pagination-bullet-horizontal-gap': '10px',
      '--swiper-pagination-bullet-inactive-color': '#E5E7EB',
      '--swiper-pagination-bullet-inactive-opacity': '.96',
    }"
    :lazy="true"
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    class="mySwiper tw-h-14"
  >
    <swiper-slide>
      <img data-src="../assets/images/office-1.jpg" class="swiper-lazy" />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="../assets/images/office-2.jpg" class="swiper-lazy" />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="../assets/images/office-3.jpg" class="swiper-lazy" />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="../assets/images/office-4.jpg" class="swiper-lazy" />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Lazy, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
.swiper {
  width: 730px;
  height: 480px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: height;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.swiper {
  // margin-left: auto;
  // margin-right: auto;
}

.swiper-horizontal > .swiper-pagination-bullets {
  bottom: 57px;
  display: flex;
  margin-left: 32px;
}
// navigation
.swiper-button-next {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.215 8.4725L8.51 1.7675L10.2775 0L20 9.7225L10.2775 19.445L8.51 17.6775L15.215 10.9725H0V8.4725H15.215Z' fill='white'/%3E%3C/svg%3E%0A");
  right: 32px;
  bottom: 36px;
  left: unset;
  top: unset;
}
.swiper-button-prev {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.785 10.9723L11.49 17.6773L9.7225 19.4448L8.49968e-07 9.72232L9.7225 -0.000176375L11.49 1.76732L4.785 8.47232L20 8.47232L20 10.9723L4.785 10.9723Z' fill='white'/%3E%3C/svg%3E%0A");
  right: 96px;
  bottom: 36px;
  left: unset;
  top: unset;
}
.swiper-button-prev,
.swiper-button-next {
  border-radius: 50%;
  width: 52px;
  height: 52px;
  z-index: 11;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(255 255 255 / 20%);
  &:hover {
    background-color: #416ff4;
  }

  &::after {
    display: none;
  }
}
</style>
