import * as f from '@kuba/f'

export default f.once((search) =>
  ({
    '@id': '#searchaction',
    '@type': 'SearchAction',
    target: `${search.action}?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  })
)
