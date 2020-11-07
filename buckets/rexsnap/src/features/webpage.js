import * as f from '@rex/f'

export default f.once((home) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: home.description,
    inLanguage: 'en',
    isPartOf: {
      '@id': '#website'
    },
    name: home.title,
    url: home.url
  })
)
