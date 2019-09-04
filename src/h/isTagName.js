import * as f from '@f'

export default f.arity(1, (tagNameOrComponent) =>
  f.is(String, tagNameOrComponent))
