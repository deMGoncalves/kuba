import { urlFor } from '@kuba/router'

import inspirationl from './assets/inspiration591x645.jpg'
import inspirations from './assets/inspiration736x400.jpg'
import chairl from './assets/chair360x360.jpg'
import chairs from './assets/chair285x285.jpg'
import hadlel from './assets/hadle360x360.jpg'
import hadles from './assets/hadle285x285.jpg'
import sofal from './assets/sofa360x360.jpg'
import sofas from './assets/sofa285x285.jpg'
import clockl from './assets/clock360x360.jpg'
import clocks from './assets/clock285x285.jpg'

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
