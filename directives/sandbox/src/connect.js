import h from '@kuba/h'
import * as f from '@kuba/f'
import middleware from '@kuba/middleware'

const connect = function (sandbox) {
  const worker = sandbox.require()

  const paint = (tag) =>
    f.equal(tag.type, 3)
      ? tag.content
      : h(tag.name, tag.props, ...f.map(tag.children, paint))

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
