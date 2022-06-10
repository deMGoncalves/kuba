import curry from './curry'
import magic from './magic'

const evaluate = curry((key, target) => (
  target?.[magic(key)]?.() ?? target
))

const dunder = new Proxy(evaluate, {
  get: (_, key) => magic(key)
})

export default dunder
