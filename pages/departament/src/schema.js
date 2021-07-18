import { urlFor } from '@kuba/router'
import small from './banner_736x400.jpg'
import medium from './banner_928x300.jpg'
import large from './banner_1198x200.jpg'

export default {
  banner: {
    thumbnails: [
      small,
      medium,
      large
    ],
    title: 'Duis nec metus neque',
    description: 'In hac habitasse platea dictumst. Donec convallis ullamcorper massa id volutpat. Maecenas quis tellus viverra, tincidunt urna vitae, blandit enim. Morbi varius, purus in efficitur malesuada.'
  },
  breadcrumb: {
    paths: [
      {
        title: 'Home',
        url: urlFor('home')
      },
      {
        title: 'Departament',
        url: urlFor('departament')
      }
    ]
  }
}
