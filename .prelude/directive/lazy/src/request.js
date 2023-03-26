import middleware from '@kuba/middleware'
import magic from '@kuba/magic'
import override from '@kuba/override'

const request = middleware((lazy) => {
  override(lazy, magic.didMount, async function () {
    const { default: component } = await lazy[request.import]()
    const ast = component()
    lazy[request.render](ast)
  })
})

Object.assign(request, {
  import: magic.request_import,
  render: magic.request_render
})

export default request
