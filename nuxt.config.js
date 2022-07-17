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
        'https://fonts.cdnfonts.com/css/yellowtail'
      },
      {
        rel: 'stylesheet',
        href:
        'https://fonts.cdnfonts.com/css/palace-script-mt'
      },
      {
        rel: 'stylesheet',
        href:
        'https://fonts.cdnfonts.com/css/monospac821-bt'
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
    ['nuxt-i18n', {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
        {
          name: 'Russian',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru.js'
        },
      ],
      langDir: 'locales/',
      defaultLocale: 'en',
    }]
  ],

  router: {
    middleware: ['mobile', 'redirects']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
