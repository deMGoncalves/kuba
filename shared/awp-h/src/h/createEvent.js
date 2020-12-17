import * as f from '@rex/f'
import isPrevent from './isPrevent'
import isStop from './isStop'
import uid from './uid'

const createEvent = (event, listener, ueid = uid()) => (
  self.addEventListener('message', (event) =>
    (f.equal(ueid, event.data.type) && listener(event.data.payload))),

  {
    '@ueid': ueid,
    stop: isStop(event),
    prevent: isPrevent(event)
  }
)

export default f.arity(2, createEvent)
