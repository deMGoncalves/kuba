import * as f from '@kuba/f'

const mapper = f.memoize((props) => (
  f.filter(
    f.entries(props),
    f.compose(f.not, f.test(/^(?<attributes>className|is|slot|uid|on[A-Z].+)$/), f.prop('[0]'))
  )
))

export default (props) => (
  new Map(mapper(props))
)
