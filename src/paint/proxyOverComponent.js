import cond from 'ramda/src/cond'
import T from 'ramda/src/T'
import createHookReflow from './createHookReflow'
import createVElementToCompare from './createVElementToCompare'
import hasElementInTarget from './hasElementInTarget'

export default cond([
  [hasElementInTarget, createVElementToCompare],
  [T, createHookReflow]
])
