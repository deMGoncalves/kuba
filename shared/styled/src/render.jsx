import '@kuba/htmlparser'
import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import contents from './contents'

export default f.debounce(() => (
  render(document.head, <style>{contents.text}</style>),
  contents.rewind()
), 0)
