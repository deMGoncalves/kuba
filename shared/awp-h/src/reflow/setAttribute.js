import * as f from '@rex/f'

const setAttribute = (node, key, value) =>
  self.postMessage({
    type: 'setAttribute',
    payload: {
      '@unid': node['@unid'],
      key,
      value: (node.attributes[key] = value)
    }
  })

export default f.curry(setAttribute)
