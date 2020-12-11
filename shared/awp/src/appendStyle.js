import h, { render } from '@rex/h'
import * as f from '@rex/f'

const appendStyle = (publicPath, style) =>
  render(document.head, <link rel='preload' as='style' href={`${publicPath}/${style}`} onLoad={function () { this.rel = 'stylesheet' }} async />)

export default f.frame(appendStyle)
