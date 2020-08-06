import * as f from '@rex/f'

export default (advice) =>
  (_, __, descriptor) => {
    const joinPoint = descriptor.value

    f.assign(descriptor, {
      value () {
        return joinPoint.apply(this, advice(...arguments))
      }
    })
  }
