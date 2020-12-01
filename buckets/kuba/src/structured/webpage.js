import * as f from '@rex/f'

export default f.once((page) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: page.description,
    inLanguage: 'en',
    isPartOf: {
      '@id': '#website'
    },
    name: page.title,
    url: page.url
  })
)
