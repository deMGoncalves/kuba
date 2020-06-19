import h from '@h'
import product from './product'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)
    document.body.append(<script type='application/ld+json'>{ JSON.stringify(product(page)) }</script>)
    return page
  }
