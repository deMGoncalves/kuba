import * as f from '@kuba/f'

export default (advice) =>
  (_, __, descriptor) => {
    const joinPoint = descriptor.value

    f.assign(descriptor, {
      value () {
        return advice.call(this, joinPoint.apply(this, arguments))
      }
    })
  }
