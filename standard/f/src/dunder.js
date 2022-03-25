import curry from './curry'
import has from './has'
import magic from './magic'

const evaluate = (name, target) => (
  has(magic(name), target)
    ? target[magic(name)]()
    : target
)

const dunder = new Proxy(curry(evaluate), {
  get: (_target, method) => magic(method)
})

export default dunder
