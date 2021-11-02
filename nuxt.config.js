export default {
  // Target: https://go.nuxtjs.dev/config-target
  // pageTransition: 'fade',
  target: 'static',
  generate: {
    // choose to suit your project
    interval: 2000,
  },
  server: {
    host: '192.168.1.237',
  },
  // router: {
  //   base: '/',
  //   scrollBehavior: async (to, from, savedPosition) => {
  //     if (savedPosition) {
  //       return savedPosition
  //     }

  //     const findEl = async (hash, x) => {
  //       return (
  //         document.querySelector(hash) ||
  //         new Promise((resolve, reject) => {
  //           if (x > 50) {
  //             return resolve()
  //           }
  //           setTimeout(() => {
  //             resolve(findEl(hash, ++x || 1))
  //           }, 100)
  //         })
  //       )
  //     }

  //     if (to.hash) {
  //       const el = await findEl(to.hash)
  //       if ('scrollBehavior' in document.documentElement.style) {
  //         return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  //       } else {
  //         return window.scrollTo(0, el.offsetTop)
  //       }
  //     }

  //     return { x: 0, y: 0 }
  //   },
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'H5 Official Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/global.scss', '@/assets/scss/fonts.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    'nuxt-leaflet',
    ['vue-scrollto/nuxt', { duration: 300 }],
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // 'nuxt-vite',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/global-components',
      {
        /* module options */
      },
    ],
  ],

  styleResources: {
    // your settings here
    sass: [
      // only for a global scss-vars
      /* './src/assets/scss/global.scss' */
    ],
    scss: [],
    less: [],
    stylus: [],
    hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },
  modules: [
    // Modules: https://go.nuxtjs.dev/config-modules
    // modules - for server side target
    // Simple usage
    // 'nuxt-leaflet',
    // ['vue-scrollto/nuxt', { duration: 300 }],
    // With options
    // ['nuxt-leaflet', { /* module options */ }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/echarts/, /zrender/, 'gsap'],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
}
