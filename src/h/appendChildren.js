import curry from 'ramda/src/curry'
import forEach from 'ramda/src/forEach'
import mapTextNode from './mapTextNode'

const appendChildren = (children, element) => {
  forEach(child => element.appendChild(child), mapTextNode(children))
  return element
}

export default curry(appendChildren)
