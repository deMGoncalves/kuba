import { push } from '@kuba/jsonld'
import * as settings from '@kuba/settings'

export default (marca) =>
  push({
    '@id': `#${marca.slug}`,
    '@type': 'Brand',
    description: marca.descricao,
    logo: marca.logo,
    mainEntityOfPage: {
      '@id': '#webpage',
      '@type': 'WebPage',
      breadcrumb: {
        '@id': '#breadcrumb'
      },
      description: marca.descricao,
      inLanguage: settings.app.language,
      isPartOf: {
        '@id': '#website'
      },
      name: marca.nome,
      url: settings.app.url
    },
    name: marca.nome
  })
