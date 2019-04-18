import * as r from 'ramda'
import mapTextNode from './mapTextNode'

const appendChildren = (children, element) => {
  r.forEach(child => element.appendChild(child), mapTextNode(children))
  return element
}

export default r.curry(appendChildren)
