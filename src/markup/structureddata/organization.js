import address from './address'

export default {
  '@context': 'http://schema.org',
  '@id': 'https://zuen.store#organization',
  '@type': 'Organization',
  address,
  image: {
    '@type': 'ImageObject',
    '@id': 'https://zuen.store/zuen.png#image',
    caption: 'Zuen',
    url: 'https://zuen.store/zuen.png'
  },
  legalName: 'Zuen Store',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://zuen.store/zuen.png#logo',
    caption: 'Zuen',
    url: 'https://zuen.store/zuen.png'
  },
  name: 'Zuen',
  sameAs: 'https://github.com/oneOffJS/zuen',
  url: 'https://zuen.store'
}
