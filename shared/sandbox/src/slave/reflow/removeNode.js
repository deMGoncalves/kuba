import * as f from '@rex/f'

const removeNode = (node, _vNode, parent) => (
  self.postMessage({
    type: 'removeNode',
    payload: {
      '@unid': node['@unid']
    }
  }),

  f.splice(parent.children, f.indexOf(parent.children, node), 1)
)

export default f.curry(removeNode)
