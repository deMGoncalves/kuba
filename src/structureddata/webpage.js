import breadcrumb from './breadcrumb'
import organization from './organization'
import website from './website'

export default (page) => ({
  '@context': 'http://schema.org',
  '@id': `${location.href}#webpage`,
  '@type': 'Webpage',
  author: organization,
  breadcrumb: breadcrumb(page),
  description: page.description,
  image: {
    '@type': 'ImageObject',
    '@id': `${page.image[0]}#image`,
    caption: page.title,
    url: page.image[0]
  },
  inLanguage: 'pr-BR',
  isBasedOn: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZWBZTO',
  isPartOf: website,
  primaryImageOfPage: {
    '@type': 'ImageObject',
    '@id': `${page.image[0]}#primaryimage`,
    caption: page.title,
    url: page.image[0]
  },
  name: page.title,
  sameAs: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZWBZTO',
  url: location.href
})
