import curry from './curry'
import magic from './magic'

const evaluate = (name, target) => (
  target?.[magic(name)]?.() ?? target
)

const dunder = new Proxy(curry(evaluate), {
  get: (_target, method) => magic(method)
})

export default dunder
