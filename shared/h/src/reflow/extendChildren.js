import * as f from '@rex/f'
import greaterNumberOfChildren from './greaterNumberOfChildren'
import reflow from './reflow'

export default (node, vNode) =>
  f.always(node)(
    f.forEach(
      f.map(
        f.repeat(null, greaterNumberOfChildren(node, vNode)),
        (_, index) =>
          [node.childNodes[index], vNode.childNodes[index], node]
      ),
      (args) => reflow(...args)))
