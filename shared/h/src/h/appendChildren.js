import * as f from '@rex/f'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'

const appendChildren = (children, element) =>
  f.always(element)(element.append(...mapTextNode(mapComponent(children))))

export default f.curry(appendChildren)
