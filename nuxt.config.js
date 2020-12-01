import axios from 'axios'
import removeVietnameseTones from './converter/converter'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả', name: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/apollo',
    'vue-social-sharing/nuxt',
    '@nuxtjs/sitemap'
  ],
  sitemap: [
    {
      hostname:'https://tiengtrung30s.com/',
      path: '/sitemap-posts',
      cacheTime: 1000 * 60 * 15,
      routes: async () =>{
        const post= await axios.get('https://tiengtrung30s-cms.herokuapp.com/blogs')
        return post.data.map(p => `/post/${removeVietnameseTones(p.Title)}`)
      },
  
    },
    {
      hostname:'https://tiengtrung30s.com/',
      path: '/sitemap-main',
      cacheTime: 1000 * 60 * 15,
      routes: [
        '/'
      ]
    }
  ],
  googleAnalytics: {
    id: 'G-G0FBQZ5436'
  },

  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  purgeCSS: {
      enabled: ({ isDev, isClient }) => (!isDev && isClient), // or `false` when in dev/debug mode
      paths: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js'
      ],
      styleExtensions: ['.css'],
      whitelist: ['body', 'html', 'nuxt-progress'],
      extractors: [
        {
          extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
          extensions: ['html', 'vue', 'js']
        }
      ]
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://tiengtrung30s-cms.herokuapp.com/graphql',
      }
    }
  },
}
