import * as f from '@kuba/f'

export default f.once(() =>
  ({
    '@id': '#breadcrumb',
    '@type': 'BreadcrumbList',
    itemListElement: {
      '@id': '#item'
    }
  })
)
