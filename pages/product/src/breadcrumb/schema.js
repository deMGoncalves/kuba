import { urlFor } from '@kuba/router'

export default {
  paths: [
    {
      title: 'Home',
      url: urlFor('home')
    },
    {
      title: 'Departament',
      url: urlFor('departament')
    },
    {
      title: 'Category',
      url: urlFor('category')
    }
  ]
}
