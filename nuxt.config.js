import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - fms-fe',
    title: 'fms-fe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:80',
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'http://localhost/api',
    credentials: true
  },
  // proxy: {
  //   '/laravel': {
  //     // target: 'https://laravel-auth.nuxtjs.app',
  //     target: 'http://localhost:80',
  //     pathRewrite: { '^/laravel': '/' }
  //   }
  // },
  // auth: {
  //   strategies: {
  //     'laravelSanctum': {
  //       provider: 'laravel/sanctum',
  //       url: 'http://localhost:80',
  //       endpoints: {
  //         login: {
  //           url: '/api/login',
  //         },
  //         user: {
  //           url: '/api/user',
  //         },
  //       }
  //     }
  //   }
  // },
  proxy: {
    '/laravel': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/laravel': '/' }
    }
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost',
        endpoints: {
          login: {
            url: '/api/login',
          },
          user: {
            url: '/api/self',
          },
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#3F51B5",
          // primary: '#105472',
          secondary: '#b0bec5',
          green: "#9FD4A6",
          purple: "#867EAF",
          orange: "#C5A899",
          teal: "#5C94A5",
          accent: '#8c9eff',
          error: '#EC4C47',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
