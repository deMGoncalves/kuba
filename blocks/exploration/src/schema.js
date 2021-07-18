import { urlFor } from '@kuba/router'
import cadeiras from './cadeiras.jpg'
import sofas from './sofas.jpg'
import acessorios from './acessorios.jpg'
import bancos from './bancos.jpg'

export default {
  title: 'In efficitur elementum odio',
  departaments: [
    {
      title: 'Mauris arcu dolor',
      thumbnail: cadeiras,
      url: urlFor('departament')
    },
    {
      title: 'Cras ac commodo',
      thumbnail: bancos,
      url: urlFor('departament')
    },
    {
      title: 'Nullam a pulvinar',
      thumbnail: sofas,
      url: urlFor('departament')
    },
    {
      title: 'Interdum et',
      thumbnail: acessorios,
      url: urlFor('departament')
    }
  ]
}
