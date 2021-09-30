import * as settings from '@kuba/settings'

export default (category) =>
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
      description: category.description,
      inLanguage: settings.app.language,
      isPartOf: {
        '@id': '#website'
      },
      name: category.title,
      url: settings.app.url
    }
  })
