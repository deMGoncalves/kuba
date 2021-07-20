import { urlFor } from '@kuba/router'

export default {
  breadcrumb: {
    paths: [
      {
        title: 'Home',
        url: urlFor('home')
      },
      {
        title: 'Departament',
        url: urlFor('departament')
      }
    ]
  }
}
