import { urlFor } from '@kuba/router'
import acessory from './assets/acessory.jpg'
import chair from './assets/chair.jpg'
import sofa from './assets/sofa.jpg'
import stool from './assets/stool.jpg'

export default {
  title: 'In efficitur elementum odio',
  departaments: [
    {
      title: 'Mauris arcu dolor',
      thumbnail: chair,
      url: urlFor('departament')
    },
    {
      title: 'Cras ac commodo',
      thumbnail: stool,
      url: urlFor('departament')
    },
    {
      title: 'Nullam a pulvinar',
      thumbnail: sofa,
      url: urlFor('departament')
    },
    {
      title: 'Interdum et',
      thumbnail: acessory,
      url: urlFor('departament')
    }
  ]
}
