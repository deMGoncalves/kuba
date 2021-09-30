import * as f from '@kuba/f'
import * as settings from '@kuba/settings'

export default (breadcrumb) =>
  ({
    '@id': '#breadcrumb',
    '@type': 'BreadcrumbList',
    itemListElement: f.map(breadcrumb.paths, (path, i) => ({
      '@type': 'ListItem',
      item: f.add(settings.app.url, path.url),
      name: path.title,
      position: f.inc(i)
    }))
  })
