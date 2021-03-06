import { groq } from '@nuxtjs/sanity'
import client from "./sanity.js"
import axios from 'axios'

let dynamicRoutes = async () =>{
  const rquery = groq `*[_type == "resources"]`
  const resources = await client.fetch(rquery)
  var resRoute = resources.map(res => `/tai-lieu/${(res.slug.current)}`)

  // Generate related blog by rand
  const bquery = groq `*[_type == "post"]`
  const blogs = await client.fetch(bquery)
  var blogRoute = blogs.map(blg => `/post/${(blg.slug.current)}`)

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
    "@/plugins/sanity-blocks.js",
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sanity',
    '@nuxtjs/dotenv',
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
      routes: dynamicRoutes
  
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
  sanity: {
    projectId: '7hft69j2'
  },
  googleAnalytics: {
    id: 'UA-184182241-1'
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
