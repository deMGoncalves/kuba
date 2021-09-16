import placeholderSM from './assets/placeholder_361x367.svg'
import placeholderMD from './assets/placeholder_705x430.svg'
import placeholderLG from './assets/placeholder_897x482.svg'

export default function () {
  return Promise.resolve({
    cta: 'Fusce vel lacus',
    description: 'Etiam nec est aliquet, convallis ante nec, tincidunt purus. Ut vehicula dolor ut sagittis sagittis.',
    thumbnails: [
      placeholderSM,
      placeholderMD,
      placeholderLG
    ],
    title: 'Pellentesque finibus cursus.',
    url: '/departament'
  })
}
