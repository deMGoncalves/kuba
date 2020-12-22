import h, { render } from '@rex/h'
import * as f from '@rex/f'

const appendStyle = (style) =>
  render(document.head, <link rel='stylesheet' href={style} async />)

export default f.frame(appendStyle)
