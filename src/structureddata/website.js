import organization from './organization'

export default {
  '@context': 'http://schema.org',
  '@id': `${location.href}#webpage`,
  '@type': 'Webpage',
  author: organization,
  image: 'https://zuen.store/zuen.png',
  isBasedOn: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZWBZTO',
  name: 'Zuen',
  sameAs: 'https://github.com/oneOffJS',
  url: location.href
}
