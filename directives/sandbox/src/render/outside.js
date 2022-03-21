import * as f from '@kuba/f'
import { paint } from '@kuba/sandbox'
import { render } from '@kuba/h'

export default {
  is (event) {
    return f.and(
      f.equal('render', event.data?.action),
      f.or(
        f.equal('head', event.data?.payload?.element),
        f.equal('body', event.data?.payload?.element)
      )
    )
  },

  execute (event) {
    render(
      document[event.data.payload.element],
      ...f.map(event.data?.payload?.children, paint)
    )
  }
}
