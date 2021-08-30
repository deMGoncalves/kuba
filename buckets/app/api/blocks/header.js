export default function (_request, response) {
  response.json({
    darlings: [
      {
        text: 'In finibus',
        url: '/departament/category'
      },
      {
        text: 'Donec suscipit',
        url: '/departament/category'
      },
      {
        text: 'Aenean mollis',
        url: '/departament/category'
      }
    ],
    nav: [
      {
        text: 'Home',
        url: '/'
      },
      {
        text: 'Phasellus at',
        url: '/departament'
      },
      {
        text: 'Etiam non',
        url: '/departament'
      },
      {
        text: 'Aenean ac',
        url: '/departament'
      },
      {
        text: 'Ut at',
        url: '/departament'
      },
      {
        text: 'Nulla molestie',
        url: '/departament'
      }
    ]
  })
}
