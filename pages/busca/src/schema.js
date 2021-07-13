import { urlFor } from '@kuba/router'

export default {
  breadcrumb: {
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
}
