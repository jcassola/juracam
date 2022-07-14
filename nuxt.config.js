export default {
  mode: 'spa',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Juracam',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
        'https://fonts.googleapis.com/css2?family=Yellowtail&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
        'https://fonts.cdnfonts.com/css/palace-script-mt'
      },
      {
        rel: 'stylesheet',
        href:
        'https://db.onlinewebfonts.com/c/132e124d37c13ab350cd3cfbb789ac48?family=Monospac821+BT'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  router: {
    middleware: ['mobile']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
