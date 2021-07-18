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
    title: 'sua casa moderna',
    description: 'Design e sofisticaçao em peças únicas feitas a mão. Sua casa nunca mais será a mesma. Dê um toque de sofisticação em sua casa com nossas cadeiras, sofás e acessórios'
  },
  breadcrumb: {
    paths: [
      {
        title: 'home',
        url: urlFor('home')
      },
      {
        title: 'acessórios',
        url: urlFor('acessorios')
      }
    ]
  }
}
