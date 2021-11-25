import * as f from '@kuba/f'

export default (props) =>
  new Map(
    f.filter(
      f.entries(props),
      f.compose(f.not, f.test(/^(className|is|slot|on[A-Z].+)$/), f.prop('[0]'))
    )
  )
