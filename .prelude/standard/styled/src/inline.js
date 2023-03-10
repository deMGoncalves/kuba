import * as f from '@kuba/f'
import h from '@kuba/h'

export default {
  get: (_target, key) =>
    (strings, ...expressions) =>
      (props, children) => {
        const values = expressions.map((e) => e?.(props))
        const style = f.zip(strings, values).flat(Infinity).join('').trim()
        return h(key, { ...props, style }, ...children)
      }
}
