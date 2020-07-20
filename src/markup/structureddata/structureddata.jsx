import h from '@h'
import product from './product'

export default (page) =>
  document.body.append(<script type='application/ld+json'>{ JSON.stringify(page.variation.map(sku => product(sku, page))) }</script>)
