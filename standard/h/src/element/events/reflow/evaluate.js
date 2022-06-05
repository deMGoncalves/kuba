import * as f from '@kuba/f'
import Added from './added'
import Changed from './changed'
import Different from './different'
import Removed from './removed'

export default (events) =>
  f.cond(
    [Added.is, Added.exec(events)],
    [Removed.is, Removed.exec(events)],
    [Changed.is, Changed.exec(events)],
    [Different.is, Different.exec(events)]
  )
