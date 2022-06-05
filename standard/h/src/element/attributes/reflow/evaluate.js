import * as f from '@kuba/f'
import Added from './added'
import Changed from './changed'
import Different from './different'
import Removed from './removed'

export default (attributes) =>
  f.cond(
    [Added.is, Added.exec(attributes)],
    [Removed.is, Removed.exec(attributes)],
    [Changed.is, Changed.exec(attributes)],
    [Different.is, Different.exec(attributes)]
  )
