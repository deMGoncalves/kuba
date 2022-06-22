import * as f from '@kuba/f'

const createElement = f.memoize((name, is) => (
  document.createElement(name, { is })
))

f.assign(createElement, {
  exec: (element) => (
    createElement(
      element.name,
      element.is
    )
  ),

  is: f.compose(f.equal(1), f.prop('type'))
})

export default createElement
