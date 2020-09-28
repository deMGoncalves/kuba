import * as f from '@rex/f'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'
import render from './render'

export default (children, element) =>
  f.always(element)(f.idle(() => render(element, ...mapTextNode(mapComponent(children)))))
