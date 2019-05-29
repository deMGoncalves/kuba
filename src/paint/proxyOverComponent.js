import reflow from '../reflow'

export default (target, Component, children) => {
  if (target.__element__) {
    return Component(target, children)
  }

  Object.assign(target, {
    __element__: Component(target, children),
    __reflow__ () {
      reflow(this.__element__, Component(this, children))
    }
  })

  Object.assign(target.__element__, {
    __target__: target
  })

  return target.__element__
}
