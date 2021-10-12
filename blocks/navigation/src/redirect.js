import { urlFor } from '@kuba/router'

export default (category) =>
  location.assign(urlFor('category', { departament: 'departament', category: category.url }))
