import setAttribute from './setAttribute'

export default (node) =>
  (_, id) =>
    setAttribute(node)('for', id)
