import * as f from '@kuba/f'
import { paint } from '@kuba/sandbox'

export default (sandbox) =>
  (event) =>
    f.and(
      f.equal('render', event.data?.action),
      f.equal('self', event.data?.payload?.element)
    ) && (
      sandbox.render(...f.map(event.data?.payload?.children, paint))
    )
