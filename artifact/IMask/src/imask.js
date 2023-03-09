import magic from '@kuba/magic'
import middleware from '@kuba/middleware'
import override from '@kuba/override'

const imask = middleware(function (input) {
  override(input, magic.didMount, async function (args, next) {
    const { default: IMask } = await import('imask' /* webpackChunkName: "imask" */)
    const { element, options } = input[imask.settings]?.()
    element[magic.imask] = IMask(element, options)
    return next(...args)
  })
})

Object.assign(imask, {
  settings: magic.imask_settings
})

export default imask
