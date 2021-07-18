import { urlFor } from '@kuba/router'
import cadeira from './cadeira.jpg'
import sofa from './sofa.jpg'
import acessorio from './acessorio.jpg'
import banco from './banco.jpg'

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
