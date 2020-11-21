import attributeMapper from './attributeMapper'

export default (node) =>
  (key, value) =>
    (value && node.setAttribute(attributeMapper(node, key), value))
