// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  components: true,
  css: ['~/assets/css/main.css', '~/assets/css/animate.min.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/apollo', '@formkit/nuxt', '@nuxtjs/algolia'],
  plugins: ['~/plugins/apollo'],
  runtimeConfig: { public: { graphqlURL: process.env.PUBLIC_GRAPHQL_URL } },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      meta: [{ name: 'description', content: 'Nuxt 3 - Woocommerce' }],
    },
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  apollo: {
    authType: 'Session',
    authHeader: 'woocommerce-session',
    tokenStorage: 'cookie',
    tokenName: 'woocommerce-session',
    clients: {
      default: {
        httpEndpoint: process.env.PUBLIC_GRAPHQL_URL,
        httpLinkOptions: {
          credentials: 'include',
        },
      },
    },
  },
})
