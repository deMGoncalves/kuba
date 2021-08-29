export default function (_request, response) {
  response.json({
    title: 'In efficitur elementum odio',
    departaments: [
      {
        title: 'Mauris arcu dolor',
        thumbnail: 'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/exploration/acessory.jpg',
        url: '/departament'
      },
      {
        title: 'Cras ac commodo',
        thumbnail: 'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/exploration/chair.jpg',
        url: '/departament'
      },
      {
        title: 'Nullam a pulvinar',
        thumbnail: 'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/exploration/sofa.jpg',
        url: '/departament'
      },
      {
        title: 'Interdum et',
        thumbnail: 'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/exploration/stool.jpg',
        url: '/departament'
      }
    ]
  })
}
