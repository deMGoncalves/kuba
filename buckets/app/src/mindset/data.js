import * as f from '@kuba/f'

export default f.once((mindset) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: mindset.description,
    inLanguage: __settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: mindset.title,
    url: __settings.app.url
  })
)
