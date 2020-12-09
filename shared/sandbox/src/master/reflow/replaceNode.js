import * as f from '@rex/f'
import h from '@rex/sandbox/src/master/h'
import map from '@rex/sandbox/src/master/map'

function replaceNode (event) {
  const unid = event.data.payload['@unid']
  const oldNode = map.get(unid)
  const newNode = h(event.data.payload.node)

  oldNode.parentNode.replaceChild(newNode, oldNode)
  map.delete(unid)
}

export default f.curry(f.arity(1, f.frame(replaceNode)))
