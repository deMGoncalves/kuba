import * as f from '@rex/f'
import addEventListener from './addEventListener'
import isEvent from './isEvent'
import setAttribute from './setAttribute'

export default (attributes) =>
  f.reduce(f.entries(attributes), (attr, [key, value]) =>
    f.cond(
      [isEvent, addEventListener(attr)],
      [f.T, setAttribute(attr)]
    )(key, value),
    {}
  )
