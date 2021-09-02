export default function (_request, response) {
  response.json({
    title: 'Integer vestibulum finibus mollis',
    thumbnails: [
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_736x400.jpg',
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_591x645.jpg'
    ],
    departaments: [
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_tenis_287x287.jpg'
        ],
        title: 'Nam dignissim',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_360x360.jpeg',
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_285x285.jpeg'
        ],
        title: 'Proin dictum',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_360x360.jpeg',
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_285x285.jpeg'
        ],
        title: 'Fusce leo',
        url: '/departament'
      },
      {
        thumbnails: [
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_360x360.jpeg',
          'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/inspiration/inspiration_285x285.jpeg'
        ],
        title: 'Nunc aliquam',
        url: '/departament'
      }
    ]
  })
}
