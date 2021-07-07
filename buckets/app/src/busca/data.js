import * as f from '@kuba/f'

export default f.once((home) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: home.description,
    inLanguage: __settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: home.title,
    url: __settings.app.url
  })
)
