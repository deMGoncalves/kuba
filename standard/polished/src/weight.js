import * as f from '@kuba/f'

const modifiers = [
  'bold',
  'medium',
  'regular'
]

const weight = (props) => (
  f.join(
    f.chain(
      f.always('var(--font-weight-'),
      f.cond(
        ...f.map(modifiers, (token) => [f.has(token), f.always(token)]),
        [f.T, f.always('regular')]
      ),
      f.always(')')
    )(props),
    ''
  )
)

export default f.memoize(weight)
