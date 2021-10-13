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
    shields: [
      {
        title: '100% Javascript',
        description: 'Vestibulum egestas dolor urna, sollicitudin posuere turpis bibendum sed. Integer quis bibendum nibh. Integer ac eleifend leo. Sed.',
        thumbnails
      },
      {
        title: 'Micro Front-end',
        description: 'Pellentesque dignissim tortor lectus, sit amet imperdiet leo convallis pharetra. Integer venenatis mi odio, in dictum mauris mollis.',
        thumbnails
      },
      {
        title: 'Yarn workspaces',
        description: 'Vestibulum dapibus tortor magna, quis cursus nunc vestibulum nec. Nam in magna sagittis, eleifend ante nec, rhoncus libero.',
        thumbnails
      },
      {
        title: 'Web Workers',
        description: 'Nam ac erat faucibus, venenatis quam imperdiet, commodo leo. Suspendisse sollicitudin quam at purus pellentesque, quis euismod risus.',
        thumbnails
      }
    ]
  })
}
