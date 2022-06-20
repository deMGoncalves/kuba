import * as f from '@kuba/f'

export default (advice) =>
  (_, __, descriptor) => {
    const joinPoint = descriptor.value

    f.assign(descriptor, {
      value () {
        const params = advice.apply(this, arguments)
        return joinPoint.apply(this, params ?? arguments)
      }
    })
  }
