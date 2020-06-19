import organization from './organization'
import website from './website'

export default (page) => ({
  '@context': 'http://schema.org',
  '@id': `${location.href}#webpage`,
  '@type': 'Webpage',
  author: organization,
  description: page.description,
  image: 'https://zuen.store/zuen.png',
  inLanguage: 'pr-BR',
  isBasedOn: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZWBZTO',
  isPartOf: website,
  name: 'Zuen',
  sameAs: 'https://github.com/oneOffJS',
  url: location.href
})
