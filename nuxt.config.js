import axios from 'axios'
import removeVietnameseTones from './converter/converter'

let dynamicRoutes = async () =>{
  // Blog Route
  const bls = await axios.get("https://tiengtrung30s-cms.herokuapp.com/blogs")
  var blogRoute = bls.data.map(blg => `/post/${removeVietnameseTones(blg.Title)}`)

  // Resources Route
  const res = await axios.get("https://tiengtrung30s-cms.herokuapp.com/resources")
  var resRoute = res.data.map(res => `/tai-lieu/${removeVietnameseTones(res.Name)}`)
  
  return new Promise(resolve => {
    resolve(blogRoute.concat(resRoute))
  })
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Tiếng Trung 30 giây',
    titleTemplate: '%s | Học tiếng Trung qua giao tiếp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả' }
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
      path: '/sitemap-posts.xml',
      cacheTime: 1000 * 60 * 15,
      routes: async () =>{
        const post= await axios.get('https://tiengtrung30s-cms.herokuapp.com/blogs')
        return post.data.map(p => `/post/${removeVietnameseTones(p.Title)}`)
      },
  
    },
    {
      hostname:'https://tiengtrung30s.com/',
      path: '/sitemap-main.xml',
      cacheTime: 1000 * 60 * 15,
      routes: [
        '/'
      ]
    }
  ],
  googleAnalytics: {
    id: 'UA-184182241-1'
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
  generate: {
    fallback: true,
    routes: dynamicRoutes
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://tiengtrung30s-cms.herokuapp.com/graphql',
      }
    }
  },
}
