import placeholder from './assets/placeholder_135x135.svg'

export default function () {
  const thumbnail = placeholder

  return Promise.resolve({
    title: 'Vivamus nulla erat, interdum',
    categories: [
      {
        thumbnail,
        title: 'Integer ultrices',
        url: 'category'
      },
      {
        thumbnail,
        title: 'Praesent faucibus',
        url: 'category'
      },
      {
        thumbnail,
        title: 'Cras id',
        url: 'category'
      },
      {
        thumbnail,
        title: 'Vestibulum nibh',
        url: 'category'
      },
      {
        thumbnail,
        title: 'Integer id',
        url: 'category'
      },
      {
        thumbnail,
        title: 'Aenean vitae',
        url: 'category'
      },
      {
        thumbnail,
        title: 'In non',
        url: 'category'
      },
      {
        thumbnail,
        title: 'Sed pharetra',
        url: 'category'
      }
    ]
  })
}
