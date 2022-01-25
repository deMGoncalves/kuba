import * as settings from '@kuba/settings'

export default (schema) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: schema.descricao,
    inLanguage: settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: schema.nome,
    url: settings.app.url
  })
