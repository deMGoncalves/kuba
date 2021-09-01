export default function (_request, response) {
  response.json({
    title: 'Integer vestibulum finibus mollis',
    thumbnails: [
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_736x400.jpeg',
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_591x645.jpeg'
    ],
    departaments: [
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/chair_360x360.jpg',
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/chair_285x285.jpg'
        ],
        title: 'Nam dignissim',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/hadle_360x360.jpg',
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/hadle_285x285.jpg'
        ],
        title: 'Proin dictum',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/sofa_360x360.jpg',
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/sofa_285x285.jpg'
        ],
        title: 'Fusce leo',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/clock_360x360.jpg',
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/clock_285x285.jpg'
        ],
        title: 'Nunc aliquam',
        url: '/departament'
      }
    ]
  })
}
