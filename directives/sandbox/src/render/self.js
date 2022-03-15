import * as f from '@kuba/f'
import { paint } from '@kuba/sandbox'

export default {
  is (event) {
    return f.and(
      f.equal('render', event.data?.action),
      f.equal('self', event.data?.payload?.element)
    )
  },

  execute (sandbox) {
    return (event) =>
      sandbox.render(...f.map(event.data?.payload?.children, paint))
  }
}
