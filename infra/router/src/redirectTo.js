import urlFor from './urlFor'

export default (page, params) =>
  location.assign(urlFor(page, params))
