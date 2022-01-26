import * as settings from '@kuba/settings'

export default (schema) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: schema.description,
    inLanguage: settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: schema.name,
    url: settings.app.url
  })
