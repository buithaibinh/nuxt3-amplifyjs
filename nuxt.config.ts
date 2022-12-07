export default defineNuxtConfig({
  css: ['~/assets/styles/style.scss'],
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    resolve: {
      alias: [
        {
          find: './runtimeConfig',
          replacement: './runtimeConfig.browser'
        }
      ]
    }
  },

  app: {
    head: {
      script: [{ src: 'js/polyfills.js' }]
    }
  }
});
