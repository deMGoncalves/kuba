import * as f from '@kuba/f'

const modifiers = [
  'darkest',
  'darker',
  'dark',
  'light',
  'lighter',
  'lightest'
]

const blend = (props) => (
  f.join(
    f.chain(
      f.always('var(--color-master-'),
      f.cond(
        ...f.map(modifiers, (token, index) => [f.has(token), f.always(f.gte(index, 3) ? 'darkest' : 'lightest')]),
        [f.T, f.always('lightest')]
      ),
      f.always(')')
    )(props),
    ''
  )
)

export default f.memoize(blend)
