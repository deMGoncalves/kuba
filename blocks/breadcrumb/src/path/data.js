import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { urlFor } from '@kuba/router'

export default f.once((path) =>
  ({
    '@id': '#item',
    '@type': 'ListItem',
    item: f.add(settings.app.url, urlFor(path.page)),
    name: path.title,
    position: f.inc(path.index)
  })
)
