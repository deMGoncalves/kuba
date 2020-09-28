import * as f from '@rex/f'
import isComponent from './isComponent'

export default (children) =>
  f.map(children, (child) =>
    isComponent(child) ? child() : child)
