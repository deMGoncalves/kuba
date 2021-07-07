import * as f from '@kuba/f'

export default f.once((breadcrumb) =>
  ({
    '@id': '#breadcrumb',
    '@type': 'BreadcrumbList',
    'itemListElement': f.map(breadcrumb.paths, (path) => ({
      '@type': 'ListItem',
      name: path.title,
      item: path.url
    }))
  })
)
