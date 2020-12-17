import * as f from '@rex/f'
import createEvent from './createEvent'
import getEvent from './getEvent'

const addEventListener = (attributes, key, value) =>
  f.always(attributes)(attributes[getEvent(key)] = createEvent(key, value))

export default f.curry(addEventListener)
