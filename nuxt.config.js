export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lemony',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  mode: "universal",

  target: "static",
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    accessToken: process.env.API_KEY,
    //baseURL: 'https://sense.applio.tech/data'
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'https://sense.applio.tech/data/',
      pathRewrite: {'^/api/': ''},
       changeOrigin: true }
  },
  generate: {
    dir: 'public'
  }
}
