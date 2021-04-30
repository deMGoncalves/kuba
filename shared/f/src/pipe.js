import compose from './compose'
import reverse from './reverse'

export const pipe = (...fns) =>
  compose(...reverse(fns))
