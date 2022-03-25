import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Donacions - Compromís',
    htmlAttrs: {
      lang: 'ca',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://compromis.net/sub/icons/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'https://compromis.net/sub/icons/favicon32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: 'https://compromis.net/sub/icons/favicon192.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://compromis.net/sub/fonts/manrope.css?variable',
      },
    ],
  },

  css: [
    '@compromis/blobby/scss/blobby.scss'
  ],

  buildModules: [],
})
