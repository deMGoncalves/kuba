import * as f from '@kuba/f'
import * as settings from '@kuba/settings'

export default f.once((home) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: home.description,
    inLanguage: settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: home.title,
    url: settings.app.url
  })
)
