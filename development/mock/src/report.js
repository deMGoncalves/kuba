import thumbnail from './assets/placeholder_55x55.svg'

export default function () {
  return Promise.resolve({
    title: 'In efficitur elementum odio',
    shields: [
      {
        title: 'Standard',
        description: 'Único padrão de codificação',
        thumbnail
      },
      {
        title: 'DeepSource',
        description: 'Mantenha seu código limpo',
        thumbnail
      },
      {
        title: 'Code Climate',
        description: 'Melhoria continua do seu código',
        thumbnail
      },
      {
        title: 'Codacy',
        description: 'Qualidade do seu código alto',
        thumbnail
      }
    ]
  })
}
