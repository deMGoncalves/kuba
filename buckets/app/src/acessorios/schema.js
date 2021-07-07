import { urlFor } from '@kuba/router'

export default {
  paths: [
    {
      title: 'Home',
      url: urlFor('home')
    },
    {
      title: 'Acessórios',
      url: urlFor('acessorios')
    }
  ]
}
