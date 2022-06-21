import * as f from '@kuba/f'
import arity from './arity'
import curry from './curry'
import _not from './internal/not'

const not = new Proxy(curry(_not), {
  get: (_, key) =>
    curry(arity(f[key].length, (...args) => _not(f[key](...args))))
})

export default not
