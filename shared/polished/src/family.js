import * as f from '@kuba/f'
import cleaner from './cleaner'

const mapper = [
  'highlight',
  'base'
]

const weight = (props) =>
  f.join(
    f.chain(
      f.always('var(--font-family-'),
      f.cond(
        ...f.map(mapper, (token) => [f.has(token), f.always(token)]),
        [f.T, f.always('base')]
      ),
      f.always(')')
    )(props),
    ''
  )

export default cleaner(weight, mapper)

