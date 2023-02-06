// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-windicss',
    '@vueuse/nuxt',
  ],
  // experimental features
  experimental: {
    reactivityTransform: false,
  },
  // build
  build: {
    transpile: ['@headlessui/vue'],
  },
  babel: {
    presets(env, [preset, options]) {
      return [['@nuxt/babel-preset-app', options]]
    },
  },
  // auto import components
  components: true,
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
