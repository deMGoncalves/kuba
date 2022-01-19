import * as f from '@kuba/f'

export default (path) =>
  ({
    '@id': '#item',
    '@type': 'ListItem',
    item: path.href,
    name: path.title,
    position: f.inc(path.index)
  })
