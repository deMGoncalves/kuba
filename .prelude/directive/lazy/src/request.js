import middleware from '@kuba/middleware'
import magic from '@kuba/magic'
import override from '@kuba/override'

const request = middleware((instanceRef) => {
  override(instanceRef, magic.didMount, async function () {
    const { default: component } = await instanceRef[request.importer]()
    const ast = component()
    instanceRef[request.render](ast)
  })
})

Object.assign(request, {
  importer: magic.request_importer,
  render: magic.request_render
})

export default request
