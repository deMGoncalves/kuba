import * as f from '@kuba/f'

const modifiers = [
  'highlight',
  'base',
  'mono'
]

const family = (props) => (
  f.join(
    f.chain(
      f.always('var(--font-family-'),
      f.cond(
        ...f.map(modifiers, (token) => [f.has(token), f.always(token)]),
        [f.T, f.always('base')]
      ),
      f.always(')')
    )(props),
    ''
  )
)

export default f.memoize(family)
