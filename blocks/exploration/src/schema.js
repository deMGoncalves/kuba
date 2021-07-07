import { urlFor } from '@kuba/router'
import cadeiras from './cadeiras.jpg'
import sofas from './sofas.jpg'
import acessorios from './acessorios.jpg'

export default {
  title: 'navegue pelos departamentos',
  departaments: [
    {
      title: 'cadeiras',
      thumbnail: cadeiras,
      url: urlFor('cadeiras')
    },
    {
      title: 'sofás',
      thumbnail: sofas,
      url: urlFor('sofas')
    },
    {
      title: 'acessórios',
      thumbnail: acessorios,
      url: urlFor('acessorios')
    }
  ]
}
