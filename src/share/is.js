import { curry } from './'

export default curry(
  (typing, target) =>
    (target != null && target.constructor === typing) || target instanceof typing
)
