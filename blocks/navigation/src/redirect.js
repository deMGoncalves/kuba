import { urlFor } from '@kuba/router'

export default (category) =>
  location.assign(urlFor('category', { departament: 'women', category: category.link_rewrite }))
