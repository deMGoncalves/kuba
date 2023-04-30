import magic from '@kuba/magic'

function repaint (_target, _prop, descriptor) {
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      requestAnimationFrame(() => this[repaint.reflow]())
      return Reflect.apply(next, this, arguments)
    }
  })
}

Object.assign(repaint, {
  reflow: magic.repaint_reflow
})

export default repaint
