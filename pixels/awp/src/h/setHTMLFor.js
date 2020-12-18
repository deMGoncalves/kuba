import * as f from '@rex/f'
import setAttribute from './setAttribute'

const setHTMLFor = (node, _key, value) =>
  setAttribute(node, 'for', value)

export default f.curry(setHTMLFor)
