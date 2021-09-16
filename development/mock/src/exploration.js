import placeholderSM from './assets/placeholder_360x360.svg'
import placeholderMD from './assets/placeholder_220x220.svg'
import placeholderLG from './assets/placeholder_287x287.svg'

export default function () {
  const thumbnails = [
    placeholderSM,
    placeholderMD,
    placeholderLG
  ]

  return Promise.resolve({
    title: 'In efficitur elementum odio',
    departaments: [
      {
        title: 'Mauris arcu dolor',
        thumbnails,
        url: '/departament'
      },
      {
        title: 'Cras ac commodo',
        thumbnails,
        url: '/departament'
      },
      {
        title: 'Nullam a pulvinar',
        thumbnails,
        url: '/departament'
      },
      {
        title: 'Interdum et',
        thumbnails,
        url: '/departament'
      }
    ]
  })
}
