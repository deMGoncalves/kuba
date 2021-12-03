import * as settings from '@kuba/settings'

export default (about) =>
  ({
    '@id': '#webpage',
    '@type': 'WebPage',
    description: about.description,
    inLanguage: settings.app.language,
    isPartOf: {
      '@id': '#website'
    },
    name: about.title,
    url: settings.app.url
  })
