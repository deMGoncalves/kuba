import * as f from '@f'

export default (prop, target, predicate) => {
  const method = target[prop]

  f.assign(target, {
    [prop] () {
      return method.apply(this, predicate(...arguments))
    }
  })
}
