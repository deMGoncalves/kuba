import magic from '@kuba/magic'
import middleware from '@kuba/middleware'
import override from '@kuba/override'

const hammer = middleware(function (input) {
  override(input, magic.didMount, async function (args, next) {
    const { default: Hammer } = await import('hammer' /* webpackChunkName: "hammer" */)
    const { element, options } = input[hammer.settings]?.()
    element[magic.hammer] = new Hammer(element, options)
    return next(...args)
  })
})

Object.assign(hammer, {
  settings: magic.hammer_settings
})

export default hammer
