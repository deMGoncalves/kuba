import * as f from '@rex/f'
import createText from './createText'
import executeComponent from './executeComponent'
import isComponent from './isComponent'
import isText from './isText'

export default f.compose(
  f.flatten,
  f.map(
    f.__,
    f.cond(
      [isComponent, executeComponent],
      [isText, createText],
      [f.T, f.repass]
    )
  )
)
