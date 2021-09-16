import placeholderSM from './assets/placeholder_736x400.svg'
import placeholderMD from './assets/placeholder_928x400.svg'
import placeholderLG from './assets/placeholder_1198x400.svg'

export default function () {
  return Promise.resolve({
    cta: 'Sed cursus',
    description: 'Nulla id placerat sem. Vestibulum congue suscipit erat, eu tempor augue venenatis ut. Vestibulum magna ex, pulvinar eget quam et, rutrum sodales nisl. Curabitur finibus tristique.',
    thumbnails: [
      placeholderSM,
      placeholderMD,
      placeholderLG
    ],
    title: 'Nunc eu dignissim leo. Donec.',
    url: '/departament'
  })
}
