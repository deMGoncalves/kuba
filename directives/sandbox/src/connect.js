import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import middleware from '@kuba/middleware'
import paint from './paint'

const connect = function (sandbox) {
  const worker = sandbox.require()

  worker.addEventListener('message', function (event) {
    f.and(
      f.equal('render', event.data?.action),
      f.equal('self', event.data?.payload?.element)
    ) && (
      sandbox.render(...f.map(event.data?.payload?.children, paint))
    )
  })
}

export default middleware(connect)
