// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolvePath} from '@nuxt/kit'

export default async () => defineNuxtConfig({
  modules: ['nuxt-svgo', 'nuxt-swiper', 'nuxt-font-loader'],
  svgo: {
    componentPrefix: 'Icon',
  },
  alias: {
    'pages': await resolvePath('./pages/'),
    'css': await resolvePath('./assets/styles/'),
    'components': await resolvePath('./components/')
  },
  fontLoader: {
    local: [
      {
        display: 'swap',
        family: 'GothamPro',
        src: '/fonts/GothamProRegular.woff2',
        weight: '400'
      },
      {
        display: 'swap',
        family: 'GothamPro',
        src: '/fonts/GothamProMedium.woff2',
        weight: '500'
      },
      {
        display: 'swap',
        family: 'GothamPro',
        src: '/fonts/GothamProBold.woff2',
        weight: '700'
      },
      {
        display: 'swap',
        family: 'GothamPro',
        src: '/fonts/GothamProBlack.woff2',
        weight: '900'
      },
    ],
  },
  postcss: {
    plugins: {
      'autoprefixer': {},
      'postcss-nested': {
        rootRuleName: 'at-root',
      },
      'postcss-pxtorem': {
        rootValue: 16,
        minPixelValue: 3,
        propList: ['*'],
        unitPrecision: 3,
        exclude: /node_modules/i,
      },
      'postcss-sort-media-queries': {},
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true}
})
