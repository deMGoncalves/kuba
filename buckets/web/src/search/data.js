import * as settings from '@kuba/settings'

export default (page) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: page.description,
    inLanguage: settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: page.title,
    url: settings.app.url
  })
