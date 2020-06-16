import h from '@h'

export default {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  address: {
    '@type': 'PostalAddress',
    postalCode: '07135-313',
    streetAddress: 'Rua Floro de Oliveira, 361',
    addressRegion: 'SP',
    addressLocality: 'Guarulhos, Jd. Adriana',
    addressCountry: {
      '@type': 'Country',
      name: 'BR'
    },
    telephone: '+55 11 94631-4083',
    email: 'cleber.engineer@hotmail.com'
  },
  logo: 'https://dummyimage.com/112x112/1a1a1a/1a1a1a',
  name: 'Zuen',
  sameAs: 'https://github.com/oneOffJS/zuen',
  url: 'https://zuen.store'
}
