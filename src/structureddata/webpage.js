import organization from './organization'

export default {
  '@context': 'http://schema.org',
  '@id': `${location.href}#website`,
  '@type': 'Website',
  author: organization,
  image: 'https://zuen.store/zuen.png',
  name: 'Zuen',
  sameAs: 'https://github.com/oneOffJS',
  url: location.href
}
