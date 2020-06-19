import organization from './organization'
import website from './website'

export default (page) => ({
  '@context': 'http://schema.org',
  '@id': `${location.href}#webpage`,
  '@type': 'Webpage',
  author: organization,
  description: page.description,
  image: page.image,
  inLanguage: 'pr-BR',
  isBasedOn: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZWBZTO',
  isPartOf: website,
  name: page.title,
  sameAs: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZWBZTO',
  url: location.href
})
