import organization from './organization'

export default {
  '@context': 'http://schema.org',
  '@id': `${location.href}#website`,
  '@type': 'Website',
  author: organization,
  description: 'JavaScript é como uma folha em branco – A liberdade de programar do jeito que faça sentido para o negócio!',
  image: 'https://zuen.store/zuen.png',
  name: 'Zuen',
  sameAs: 'https://github.com/oneOffJS',
  url: location.href
}
