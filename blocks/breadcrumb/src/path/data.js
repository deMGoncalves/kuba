import { service } from '@kuba/marionette'

export default service((path) => (
  {
    '@id': '#item',
    '@type': 'ListItem',
    item: path.href,
    name: path.title,
    position: path.index()
  }
))
