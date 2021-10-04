import '@kuba/tokens'
import '@kuba/reset'

import h, { render } from '@kuba/h'
import Zone from '@kuba/zone'
import Lazy from '@kuba/lazy'

render(
  document.body,
  <Zone>
    <p>1. teste</p>
    <p>2. teste</p>
    <Lazy require={() => import('./component')} />
    <Lazy require={() => import('./component')} />
  </Zone>
)
