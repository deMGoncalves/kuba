import * as settings from '@kuba/settings'

export default (searchbar) =>
  ({
    '@id': '#searchaction',
    '@type': 'SearchAction',
    'query-input': 'required name=search_term_string',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${settings.app.url}${searchbar.action}?q={search_term_string}`
    }
  })
