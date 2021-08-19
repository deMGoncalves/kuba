import * as f from '@kuba/f'

export default f.debounce((wc) =>
  wc.element.reflow(wc.component(wc.attrs, wc.hooks)), 0)
