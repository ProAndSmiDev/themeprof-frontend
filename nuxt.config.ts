// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolvePath} from '@nuxt/kit'

export default async () => defineNuxtConfig({
  modules: ['nuxt-svgo', 'nuxt-swiper', 'nuxt-font-loader'],
  svgo: {
    componentPrefix: 'Icon',
  },
  alias: {
    'pages': await resolvePath('./pages/'),
    'css': await resolvePath('./assets/css/'),
    'components': await resolvePath('./components/')
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
