import address from './address'
import review from './review'

export default {
  '@context': 'http://schema.org',
  '@id': 'https://zuen.store#organization',
  '@type': 'Organization',
  address,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '2'
  },
  legalName: 'Zuen Store',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://zuen.store/zuen.png#logo',
    caption: 'Zuen',
    url: 'https://zuen.store/zuen.png'
  },
  name: 'Zuen',
  review,
  sameAs: 'https://github.com/oneOffJS/zuen',
  url: 'https://zuen.store'
}
