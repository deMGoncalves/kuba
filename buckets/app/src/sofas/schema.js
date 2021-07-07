import { urlFor } from '@kuba/router'

export default {
  paths: [
    {
      title: 'Home',
      url: urlFor('home')
    },
    {
      title: 'Sofás',
      url: urlFor('sofas')
    }
  ]
}
