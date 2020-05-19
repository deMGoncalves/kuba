import * as f from '@f'

export default (prop, target, advice) => {
  const joinPoint = target[prop]

  f.assign(target, {
    [prop] () {
      return joinPoint.apply(this, advice(...arguments))
    }
  })
}
