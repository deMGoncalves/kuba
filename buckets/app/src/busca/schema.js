import { urlFor } from '@kuba/router'

export default {
  paths: [
    {
      title: 'home',
      url: urlFor('home')
    },
    {
      title: 'busca',
      url: urlFor('busca')
    }
  ]
}
