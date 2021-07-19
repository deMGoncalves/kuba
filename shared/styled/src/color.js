import * as f from '@kuba/f'

export default (props) =>
  f.join(
    f.chain(
      f.always('--color-'),
      f.cond(
        [f.has('complete'), f.always('complete')],
        [f.has('danger'), f.always('danger')],
        [f.has('info'), f.always('info')],
        [f.has('master'), f.always('master')],
        [f.has('primary'), f.always('primary')],
        [f.has('success'), f.always('success')],
        [f.has('warning'), f.always('warning')],
        [f.T, f.always('master')]
      ),
      f.cond(
        [f.has('darkest'), f.always('-darkerst')],
        [f.has('darker'), f.always('-darker')],
        [f.has('dark'), f.always('-dark')],
        [f.has('light'), f.always('-light')],
        [f.has('lighter'), f.always('-lighter')],
        [f.has('lightest'), f.always('-lightest')],
        [f.T, f.always('')]
      )
    )(props),
    ''
  )
