import * as f from '@rex/f'

const setClassName = (node, key, value) =>
  self.postMessage({
    type: 'setClassName',
    payload: {
      '@unid': node['@unid'],
      key,
      value: (node.attributes[key] = value)
    }
  })

export default f.curry(setClassName)
