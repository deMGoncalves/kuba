import { urlFor } from '@kuba/router'

import inspiration_l from './assets/inspiration_591x645.jpg'
import inspiration_s from './assets/inspiration_736x400.jpg'
import chair_l from './assets/chair_360x360.jpg'
import chair_s from './assets/chair_285x285.jpg'
import hadle_l from './assets/hadle_360x360.jpg'
import hadle_s from './assets/hadle_285x285.jpg'
import sofa_l from './assets/sofa_360x360.jpg'
import sofa_s from './assets/sofa_285x285.jpg'
import clock_l from './assets/clock_360x360.jpg'
import clock_s from './assets/clock_285x285.jpg'

export default {
  title: 'Integer vestibulum finibus mollis',
  thumbnails: [
    inspiration_s,
    inspiration_l
  ],
  products: [
    {
      thumbnails: [
        chair_l,
        chair_s
      ],
      title: 'Nam dignissim',
      url: urlFor('departament')
    },
    {
      thumbnails: [
        hadle_l,
        hadle_s
      ],
      title: 'Proin dictum',
      url: urlFor('departament')
    },
    {
      thumbnails: [
        sofa_l,
        sofa_s
      ],
      title: 'Fusce leo',
      url: urlFor('departament')
    },
    {
      thumbnails: [
        clock_l,
        clock_s
      ],
      title: 'Nunc aliquam',
      url: urlFor('departament')
    }
  ]
}
