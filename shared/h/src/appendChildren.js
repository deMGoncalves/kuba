import * as f from '@rex/f'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'
import render from './render'

const appendChildren = (children, element) =>
  f.always(element)(f.idle(() => render(element, ...mapTextNode(mapComponent(children)))))

export default f.curry(appendChildren)
