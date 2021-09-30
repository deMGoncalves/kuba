import * as f from '@kuba/f'

export default (shelf) =>
  ({
    '@id': '#itemlist',
    '@type': 'ItemList',
    itemListElement: f.map(shelf.products, (product) => ({
      '@type': 'Product',
      name: product.name
    })),
    numberOfItems: f.len(shelf.products)
  })
