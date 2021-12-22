import * as f from '@kuba/f'
import cleaner from './cleaner'

const colors = [
  'complete',
  'danger',
  'info',
  'master',
  'menu',
  'primary',
  'success',
  'warning'
]

const modifiers = [
  'darkest',
  'darker',
  'dark',
  'light',
  'lighter',
  'lightest'
]

const color = (props) =>
  f.join(
    f.chain(
      f.always('var(--color-'),
      f.cond(
        ...f.map(colors, (token) => [f.has(token), f.always(token)]),
        [f.T, f.always('master')]
      ),
      f.cond(
        ...f.map(modifiers, (token) => [f.has(token), f.always(`-${token}`)]),
        [f.T, f.always('')]
      ),
      f.always(')')
    )(props),
    ''
  )

export default cleaner(color, [...colors, ...modifiers])
