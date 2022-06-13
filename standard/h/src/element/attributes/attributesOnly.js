import * as f from '@kuba/f'

const attributesOnly = f.compose(
  f.not,
  f.test(/^(?<attributes>className|is|slot|uid|on[A-Z].+)$/),
  f.prop('[0]')
)

export default f.arity(1, f.memoize(attributesOnly))
