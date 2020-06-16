import organization from './organization'
import product from './product'

export default {
  '@context': 'http://schema.org',
  '@type': 'Website',
  author: organization,
  image: 'https://dummyimage.com/112x112/1a1a1a/1a1a1a',
  isBasedOn: 'https://www.samsung.com/br/smartphones/galaxy-a30s-a307/SM-A307GZWBZTO',
  name: 'Zuen',
  offers: {
    '@context': 'http://schema.org',
    '@type': 'Demand',
    itemOffered: product
  },
  sameAs: 'https://github.com/oneOffJS',
  url: 'https://zuen.store'
}
