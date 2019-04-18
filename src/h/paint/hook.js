import reflow from '../reflow'

export default (target, Component, children) => {
  let element = Component(target, children)

  Object.assign(target, {
    __reflow__ () {
      reflow(element, Component(target, children))
    }
  })

  return element
}
