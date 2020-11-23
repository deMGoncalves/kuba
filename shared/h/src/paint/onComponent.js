import * as f from '@rex/f'
import createHookReflow from './createHookReflow'
import createComponent from './createComponent'
import hasElementInTarget from './hasElementInTarget'

export default f.cond(
  [hasElementInTarget, createComponent],
  [f.T, createHookReflow]
)
