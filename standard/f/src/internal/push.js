import dunder from './dunder'

const evaluate = dunder('push')

const push = (target, ...args) =>
  ((value) => (
    value?.push?.(...args),
    value
  ))(evaluate(target))

export default push
