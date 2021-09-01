import { urlFor } from '@kuba/router'

export default {
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
