import placeholderSM from './assets/placeholder_736x400.svg'
import placeholderMD from './assets/placeholder_928x400.svg'
import placeholderLG from './assets/placeholder_1198x400.svg'

export default function () {
  return Promise.resolve({
    cta: 'Git Clone',
    description: 'A liberdade de programar do jeito que faça sendo para o produto',
    thumbnails: [
      placeholderSM,
      placeholderMD,
      placeholderLG
    ],
    title: 'Como uma folha em branco',
    url: 'https://github.com/deMGoncalves/kuba'
  })
}
