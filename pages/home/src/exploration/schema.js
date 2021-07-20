import { urlFor } from '@kuba/router'
import acessorio from './assets/acessorio.jpg'
import banco from './assets/banco.jpg'
import cadeira from './assets/cadeira.jpg'
import sofa from './assets/sofa.jpg'

export default {
  title: 'In efficitur elementum odio',
  departaments: [
    {
      title: 'Mauris arcu dolor',
      thumbnail: cadeira,
      url: urlFor('departament')
    },
    {
      title: 'Cras ac commodo',
      thumbnail: banco,
      url: urlFor('departament')
    },
    {
      title: 'Nullam a pulvinar',
      thumbnail: sofa,
      url: urlFor('departament')
    },
    {
      title: 'Interdum et',
      thumbnail: acessorio,
      url: urlFor('departament')
    }
  ]
}
