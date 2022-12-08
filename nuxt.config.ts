export default defineNuxtConfig({
  css: ['~/assets/styles/style.scss'],
  vite: {
    define: {
      // "process.env.DEBUG": false,
      'window.global': {}
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
});
