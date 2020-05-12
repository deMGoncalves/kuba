import * as f from '@f'

export default (prop, target, advice) => {
  const joinPoint = target[prop]

  f.assign(target, {
    [prop] () {
      return advice(joinPoint.apply(this, arguments))
    }
  })
}
