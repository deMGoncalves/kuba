import placeholderSM from './assets/placeholder_736x400.svg'
import placeholderMD from './assets/placeholder_928x300.svg'
import placeholderLG from './assets/placeholder_1198x200.svg'

export default function () {
  return Promise.resolve({
    cta: 'Sed dapibus',
    description: 'In hac habitasse platea dictumst. Donec convallis ullamcorper massa id volutpat. Maecenas quis tellus viverra, tincidunt urna vitae, blandit enim. Morbi varius, purus in efficitur malesuada.',
    thumbnails: [
      placeholderSM,
      placeholderMD,
      placeholderLG
    ],
    title: 'Duis nec metus neque',
    url: '/departament/category'
  })
}
