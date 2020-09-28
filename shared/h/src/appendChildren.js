import * as f from '@rex/f'
import idle from './idle'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'
import render from './render'

export default (children, element) =>
  f.always(element)(idle(() => f.forEach(mapTextNode(mapComponent(children)), render(element))))
