import * as f from '@kuba/f'

export default (props) =>
  f.join(
    f.chain(
      f.always('--size-'),
      f.cond(
        [f.has('largest'), f.always('largest')],
        [f.has('larger'), f.always('larger')],
        [f.has('large'), f.always('large')],
        [f.has('medium'), f.always('medium')],
        [f.has('small'), f.always('small')],
        [f.has('smaller'), f.always('smaller')],
        [f.has('smallest'), f.always('smallest')],
        [f.T, f.always('medium')]
      )
    )(props),
    ''
  )
