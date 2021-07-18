import { urlFor } from '@kuba/router'

export default {
  breadcrumb: {
    paths: [
      {
        title: 'Home',
        url: urlFor('home')
      },
      {
        title: 'Search',
        url: urlFor('search')
      }
    ]
  }
}
