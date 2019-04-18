import { curry } from './'

export default curry(
  (key, target) =>
    target[key]
)
