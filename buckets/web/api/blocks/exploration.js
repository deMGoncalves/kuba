export default function (_request, response) {
  const thumbnails = [
    'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_360x360.svg',
    'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_220x220.svg',
    'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/fakeimg/placeholder_287x287.svg'
  ]

  response.json({
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
