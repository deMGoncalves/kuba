import placeholderSM from './assets/placeholder_360x360.svg'
import placeholderMD from './assets/placeholder_220x220.svg'
import placeholderLG from './assets/placeholder_287x287.svg'
import placeholderSMB from './assets/placeholder_736x400.svg'
import placeholderMDB from './assets/placeholder_456x497.svg'
import placeholderLGB from './assets/placeholder_591x645.svg'

export default function () {
  const thumbnails = [
    placeholderSM,
    placeholderMD,
    placeholderLG
  ]

  return Promise.resolve({
    cta: 'Aliquam fringilla',
    description: 'Curabitur ornare ligula ex, non efficitur orci placerat in. Sed faucibus non orci et fringilla. Nulla tincidunt mattis mi. Vivamus in nulla eu est dignissim laoreet.',
    departaments: [
      {
        thumbnails,
        title: 'Nam dignissim',
        url: '/departament'
      },
      {
        thumbnails,
        title: 'Proin dictum',
        url: '/departament'
      },
      {
        thumbnails,
        title: 'Fusce leo',
        url: '/departament'
      },
      {
        thumbnails,
        title: 'Nunc aliquam',
        url: '/departament'
      }
    ],
    subtitle: 'Vestibulum gravida finibus lorem',
    thumbnails: [
      placeholderSMB,
      placeholderMDB,
      placeholderLGB
    ],
    title: 'Integer vestibulum finibus mollis',
    url: '/departament'
  })
}
