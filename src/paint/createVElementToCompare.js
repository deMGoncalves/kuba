export default (target, Component, children) => {
  const element = Component(target, children)

  Object.assign(element, {
    __target__: target
  })

  return element
}
