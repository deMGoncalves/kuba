import * as f from '@rex/f'

export default (node, vNode) =>
  self.postMessage({
    type: 'setTextContent',
    payload: f.assign(node, {
      textContent: vNode.textContent
    })
  })
