import * as f from '@rex/f'

const isRender = (event) =>
  f.equal('render', event.data.type)

export default f.flip(isRender)
