import * as f from '@kuba/f'

export default (props) =>
  new Map(
    f.filter(
      f.entries(props),
      f.compose(f.not, f.test(/^(?<attributes>className|is|slot|uid|on[A-Z].+)$/), f.prop('[0]'))
    )
  )
