import address from './address'

export default {
  '@context': 'http://schema.org',
  '@type': 'Website',
  author: {
    '@type': 'Person',
    address,
    image: 'https://dummyimage.com/112x112/1a1a1a/1a1a1a',
    name: 'Cleber de Moraes Gonçalves',
    sameAs: 'https://github.com/oneOffJS',
    url: 'https://zuen.store'
  },
  image: 'https://dummyimage.com/112x112/1a1a1a/1a1a1a',
  name: 'Zuen',
  sameAs: 'https://github.com/oneOffJS',
  url: 'https://zuen.store'
}
