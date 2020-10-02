import * as f from '@rex/f'
import isTextNode from './isTextNode'

export default (children) =>
  f.map(children, (child) =>
    isTextNode(child) ? document.createTextNode(child) : child)
