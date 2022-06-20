import dec from './dec'
import len from './len'

const last = (target) => (
  target?.[dec(len(target))]
)

export default last
