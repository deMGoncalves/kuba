import { urlFor } from '@kuba/router'

import inspirationl from './assets/inspiration_591x645.jpg'
import inspirations from './assets/inspiration_736x400.jpg'
import chairl from './assets/chair_360x360.jpg'
import chairs from './assets/chair_285x285.jpg'
import hadlel from './assets/hadle_360x360.jpg'
import hadles from './assets/hadle_285x285.jpg'
import sofal from './assets/sofa_360x360.jpg'
import sofas from './assets/sofa_285x285.jpg'
import clockl from './assets/clock_360x360.jpg'
import clocks from './assets/clock_285x285.jpg'

export default {
  title: 'Integer vestibulum finibus mollis',
  thumbnails: [
    inspirations,
    inspirationl
  ],
  products: [
    {
      thumbnails: [
        chairl,
        chairs
      ],
      title: 'Nam dignissim',
      url: urlFor('departament')
    },
    {
      thumbnails: [
        hadlel,
        hadles
      ],
      title: 'Proin dictum',
      url: urlFor('departament')
    },
    {
      thumbnails: [
        sofal,
        sofas
      ],
      title: 'Fusce leo',
      url: urlFor('departament')
    },
    {
      thumbnails: [
        clockl,
        clocks
      ],
      title: 'Nunc aliquam',
      url: urlFor('departament')
    }
  ]
}
