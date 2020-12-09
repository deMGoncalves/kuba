import * as f from '@rex/f'

const appendNode = (_node, vNode, parent) => (
  self.postMessage({
    type: 'appendNode',
    payload: {
      '@unid': parent['@unid'],
      node: vNode
    }
  }),

  f.push(parent.children, vNode)
)

export default f.curry(appendNode)
