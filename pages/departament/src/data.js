import * as settings from '@kuba/settings'

export default (departament) =>
  ({
    '@id': '#collectionpage',
    '@type': 'CollectionPage',
    about: {
      '@id': '#itemlist'
    },
    mainEntityOfPage: {
      '@id': '#webpage',
      '@type': 'WebPage',
      breadcrumb: {
        '@id': '#breadcrumb'
      },
      description: departament.description,
      inLanguage: settings.app.language,
      isPartOf: {
        '@id': '#website'
      },
      name: departament.title,
      url: settings.app.url
    }
  })
