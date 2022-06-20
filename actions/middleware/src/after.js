import * as f from '@kuba/f'

export default (advice) =>
  (_, __, descriptor) => {
    const joinPoint = descriptor.value

    f.assign(descriptor, {
      value () {
        const output = joinPoint.apply(this, arguments)
        return advice.call(this, output) ?? output
      }
    })
  }
