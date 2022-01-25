import * as settings from '@kuba/settings'

export default () =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: settings.app.description,
    inLanguage: settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: settings.app.title,
    url: settings.app.url
  })
