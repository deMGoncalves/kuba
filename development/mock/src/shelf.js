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
    title: 'Phasellus vitae est nisi. Morbi.',
    products: [
      {
        name: 'Donec molestie malesuada aliquam',
        thumbnails
      },
      {
        name: 'Mauris tempus, lectus sed molestie',
        thumbnails
      },
      {
        name: 'Donec consequat urna in ante',
        thumbnails
      },
      {
        name: 'Nullam ac metus ante. Vestibulum',
        thumbnails
      },
      {
        name: 'Ut eu semper ex, vitae',
        thumbnails
      },
      {
        name: 'In hac habitasse platea dictumst',
        thumbnails
      },
      {
        name: 'Vivamus elementum eros vel massa',
        thumbnails
      },
      {
        name: 'Integer vulputate, ligula id feugiat',
        thumbnails
      },
      {
        name: 'Donec vel ipsum blandit, bibendum',
        thumbnails
      },
      {
        name: 'Praesent ante tellus, pretium quis',
        thumbnails
      },
      {
        name: 'Etiam vitae porta nunc, in',
        thumbnails
      },
      {
        name: 'Duis sit amet nibh et',
        thumbnails
      },
      {
        name: 'Donec non massa aliquam erat',
        thumbnails
      },
      {
        name: 'In hac habitasse platea dictumst',
        thumbnails
      },
      {
        name: 'Vivamus elementum eros vel massa',
        thumbnails
      },
      {
        name: 'Donec consequat urna in ante',
        thumbnails
      },
      {
        name: 'Donec molestie malesuada aliquam',
        thumbnails
      },
      {
        name: 'Ut eu semper ex, vitae',
        thumbnails
      },
      {
        name: 'Mauris tempus, lectus sed molestie',
        thumbnails
      },
      {
        name: 'Donec consequat urna in ante',
        thumbnails
      },
      {
        name: 'Nullam ac metus ante. Vestibulum',
        thumbnails
      },
      {
        name: 'Ut eu semper ex, vitae',
        thumbnails
      },
      {
        name: 'Donec non massa aliquam erat',
        thumbnails
      },
      {
        name: 'In hac habitasse platea dictumst',
        thumbnails
      }
    ]
  })
}
