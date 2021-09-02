export default function (_request, response) {
  response.json({
    title: 'Integer vestibulum finibus mollis',
    thumbnails: [
      'https://fakeimg.pl/736x400/f0f0f0/626262',
      'https://fakeimg.pl/456x497/f0f0f0/626262',
      'https://fakeimg.pl/591x645/f0f0f0/626262'
    ],
    departaments: [
      {
        thumbnails: [
          'https://fakeimg.pl/360x360/f0f0f0/626262',
          'https://fakeimg.pl/220x220/f0f0f0/626262',
          'https://fakeimg.pl/287x287/f0f0f0/626262'
        ],
        title: 'Nam dignissim',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://fakeimg.pl/360x360/f0f0f0/626262',
          'https://fakeimg.pl/220x220/f0f0f0/626262',
          'https://fakeimg.pl/287x287/f0f0f0/626262'
        ],
        title: 'Proin dictum',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://fakeimg.pl/360x360/f0f0f0/626262',
          'https://fakeimg.pl/220x220/f0f0f0/626262',
          'https://fakeimg.pl/287x287/f0f0f0/626262'
        ],
        title: 'Fusce leo',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://fakeimg.pl/360x360/f0f0f0/626262',
          'https://fakeimg.pl/220x220/f0f0f0/626262',
          'https://fakeimg.pl/287x287/f0f0f0/626262'
        ],
        title: 'Nunc aliquam',
        url: '/departament'
      }
    ]
  })
}
