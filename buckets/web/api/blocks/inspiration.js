export default function (_request, response) {
  const thumbnails = [
    'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_360x360.svg',
    'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_220x220.svg',
    'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_287x287.svg'
  ]

  response.json({
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
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_736x400.svg',
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_456x497.svg',
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_591x645.svg'
    ],
    title: 'Integer vestibulum finibus mollis',
    url: '/departament'
  })
}
