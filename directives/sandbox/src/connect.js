import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import middleware from '@kuba/middleware'

const connect = function (sandbox) {
  const worker = sandbox.require()

  const paint = function (tag) {
    if (f.equal(tag.type, 1)) return h(tag.name, tag.props, ...f.map(tag.children, paint))
    if (f.equal(tag.type, 3)) return tag.content
    if (f.equal(tag.type, 11)) return h(Fragment, {}, ...f.map(tag.children, paint))
  }

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
