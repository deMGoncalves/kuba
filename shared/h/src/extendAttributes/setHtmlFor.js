import frame from '@rex/h/src/frame'
import setAttribute from './setAttribute'

export default (element) =>
  (_, id) =>
    setAttribute(element)('for', id)
