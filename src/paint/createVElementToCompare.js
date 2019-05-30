export default (target, Component, children) => {
  let element = Component(target, children)

  Object.assign(element, {
    __target__: target
  })

  return element
}
