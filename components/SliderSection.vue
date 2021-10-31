<template>
  <div class="swiper-container my-swiper tw-h-100">
    <div class="swiper-wrapper">
      <img class="swiper-slide" src="/assets/images/office-1.jpg" />
      <img class="swiper-slide" src="/assets/images/office-2.jpg" />
      <img class="swiper-slide" src="/assets/images/office-3.jpg" />
      <img class="swiper-slide" src="/assets/images/office-4.jpg" />
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// Import Swiper styles
// import Swiper core and required modules
// import Swiper /* Scrollbar,  Pagination, EffectCoverflow, Autoplay */ from 'swiper/core'

// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'

// install Swiper modules
// Swiper.use([
//   /* EffectCoverflow, Pagination, Autoplay */
//   // Scrollbar
// ])

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default {
  name: 'MainPageFooter',
  data() {
    return {
      swiper: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.init()
    }, 100)
  },
  methods: {
    init() {
      this.swiper = new SwiperCore('.my-swiper', {
        animating: true,
        // lazy: true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        // pagination: { clickable: true },
        // navigation: true,
        // centeredSlides: true,
        // spaceBetween: 1,
        // loop: true,
        // centeredSlides: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: false,
        //   draggable: true,
        // },
        // pagination: { clickable: true },
        // navigation: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets',
        //   clickable: true,
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          // renderBullet(index, className) {
          //   return `<span class='${className}"></span>`
          // },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        },
      })
    },
    // async routeChangeHandler() {
    //   await this.$nextTick()
    //   console.log('[Footer] [route changed]')
    //   let index = this.menuItems.findIndex((item) =>
    //     String(this.$route.name).startsWith(item.routeName)
    //   )
    //   if (index === -1) return
    //   if (index === 1) index = 0 // bugfix
    //   this.swiper.slideTo(index)
    // },
  },
}
</script>

<style lang="scss">
:root {
  --swiper-navigation-size: 44px;
  --swiper-navigation-color: #416ff4;
  --swiper-pagination-color: #416ff4;
  --swiper-pagination-bullet-width: 10px; // .swiper-pagination-bullet
  --swiper-pagination-bullet-height: 10px; // .swiper-pagination-bullet
  --swiper-pagination-bullet-horizontal-gap: 10px;
  --swiper-pagination-bullet-inactive-color: #e5e7eb;
  --swiper-pagination-bullet-inactive-opacity: 0.96;
}

.swiper {
  // width: 730px;
  width: 100%;
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

// .swiper-horizontal {
//   z-index: 1000;
//   position: absolute;
// }

.swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  background-color: #e5e7eb;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  opacity: 0.96;
}
.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets {
  bottom: 36px;
  left: 32px;
  width: fit-content;
}
// navigation
.swiper-button-next {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.215 8.4725L8.51 1.7675L10.2775 0L20 9.7225L10.2775 19.445L8.51 17.6775L15.215 10.9725H0V8.4725H15.215Z' fill='white'/%3E%3C/svg%3E%0A");
  right: 32px;
  bottom: 36px;
  left: unset;
  top: unset;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  cursor: pointer;
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
  // anim
  transition: 0.3s;
  &:hover {
    background-color: #416ff4;
  }
  &:active {
    transition: 0.2s;
    transform: scale(0.9);
  }

  &::after {
    display: none;
  }
}
</style>
