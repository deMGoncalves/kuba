import * as f from '@rex/f'

const addEventListener = (node, event, listener) =>
  self.postMessage({
    type: 'addEventListener',
    payload: {
      event,
      listener: (node.attributes[event] = listener)
    }
  })

export default f.curry(addEventListener)
