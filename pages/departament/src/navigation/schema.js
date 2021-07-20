import { urlFor } from '@kuba/router'

import acessory from './assets/accessory.jpg'
import armchair from './assets/armchair.jpg'
import chair from './assets/chair.jpg'
import clock from './assets/clock.jpg'
import hadle from './assets/hadle.jpg'
import sofa from './assets/sofa.jpg'
import stool from './assets/stool.jpg'
import strawchair from './assets/strawchair.jpg'

export default {
  title: 'Vivamus nulla erat, interdum',
  iterator: [
    {
      thumbnail: acessory,
      title: 'Integer ultrices',
      url: urlFor('category')
    },
    {
      thumbnail: armchair,
      title: 'Praesent faucibus',
      url: urlFor('category')
    },
    {
      thumbnail: chair,
      title: 'Cras id',
      url: urlFor('category')
    },
    {
      thumbnail: clock,
      title: 'Vestibulum nibh',
      url: urlFor('category')
    },
    {
      thumbnail: hadle,
      title: 'Integer id',
      url: urlFor('category')
    },
    {
      thumbnail: sofa,
      title: 'Aenean vitae',
      url: urlFor('category')
    },
    {
      thumbnail: stool,
      title: 'In non',
      url: urlFor('category')
    },
    {
      thumbnail: strawchair,
      title: 'Sed pharetra',
      url: urlFor('category')
    }
  ]
}
