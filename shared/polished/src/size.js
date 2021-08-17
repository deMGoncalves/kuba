import * as f from '@kuba/f'
import cleaner from './cleaner'

const mapper = [
  'largest',
  'larger',
  'large',
  'medium',
  'small',
  'smaller',
  'smallest'
]

const size = (props) =>
  f.join(
    f.chain(
      f.always('var(--size-'),
      f.cond(
        [f.has('largest'), f.always('largest')],
        [f.has('larger'), f.always('larger')],
        [f.has('large'), f.always('large')],
        [f.has('medium'), f.always('medium')],
        [f.has('small'), f.always('small')],
        [f.has('smaller'), f.always('smaller')],
        [f.has('smallest'), f.always('smallest')],
        [f.T, f.always('medium')]
      ),
      f.always(')')
    )(props),
    ''
  )

export default cleaner(size, mapper)
