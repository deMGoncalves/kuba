import inspiration_l from './inspiration_591x645.jpg'
import inspiration_s from './inspiration_736x400.jpg'
import chair_l from './chair_360x360.jpg'
import chair_s from './chair_285x285.jpg'
import hadle_l from './hadle_360x360.jpg'
import hadle_s from './hadle_285x285.jpg'
import sofa_l from './sofa_360x360.jpg'
import sofa_s from './sofa_285x285.jpg'
import clock_l from './clock_360x360.jpg'
import clock_s from './clock_285x285.jpg'

export default {
  title: 'destaques da semana',
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
      title: 'leather chair'
    },
    {
      thumbnails: [
        hadle_l,
        hadle_s
      ],
      title: 'hadle'
    },
    {
      thumbnails: [
        sofa_l,
        sofa_s
      ],
      title: 'large sofa'
    },
    {
      thumbnails: [
        clock_l,
        clock_s
      ],
      title: 'clock'
    }
  ]
}
