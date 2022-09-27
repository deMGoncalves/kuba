import * as f from '@kuba/f'
import evaluate from './evaluate'

export default (advice) =>
  (_, __, descriptor) => {
    const target = evaluate(descriptor)
    const joinPoint = f.prop(target, descriptor)

    f.assign(descriptor, {
      [target] () {
        const params = advice.apply(this, arguments)
        return joinPoint.apply(this, params ?? arguments)
      }
    })
  }
