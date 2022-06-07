import * as f from '@kuba/f'

const modifiers = [
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'display',
  'giant'
]

const size = (props) => (
  f.join(
    f.chain(
      f.always('var(--font-size-'),
      f.cond(
        ...f.map(modifiers, (token) => [f.has(token), f.always(token)]),
        [f.T, f.always('xs')]
      ),
      f.always(')')
    )(props),
    ''
  )
)

export default f.memoize(size)
