import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@compromis/blobby/scss/blobby.scss'
  ],

  buildModules: ['@intlify/nuxt3'],

  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'ca'
    }
  }
})
