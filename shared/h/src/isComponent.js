import * as f from '@rex/f'

export default (tagNameOrComponent) =>
  f.test(/function/, typeof tagNameOrComponent)
