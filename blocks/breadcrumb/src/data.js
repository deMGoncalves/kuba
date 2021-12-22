import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { urlFor } from '@kuba/router'

export default f.once((breadcrumb) =>
  ({
    '@id': '#breadcrumb',
    '@type': 'BreadcrumbList',
    itemListElement: f.map(breadcrumb.paths, (path, index) => ({
      '@type': 'ListItem',
      item: f.add(settings.app.url, urlFor(path.page)),
      name: path.title,
      position: f.inc(index)
    }))
  })
)
