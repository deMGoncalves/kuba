import * as settings from '@kuba/settings'

export default (home) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    description: home.description,
    inLanguage: settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: home.title,
    url: settings.app.url
  })
