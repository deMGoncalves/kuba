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
        ...f.i(f.map)(modifiers, (token, i) => [f.has(token), f.always(f.gte(i, 3) ? 'darkest' : 'lightest')]),
        [f.T, f.always('lightest')]
      ),
      f.always(')')
    )(props),
    ''
  )
)

export default f.memoize(blend)
