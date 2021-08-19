import { render } from '@kuba/h'

export default (wc) => (
  wc.setElement(wc.component(wc.attrs, wc.hooks)),
  render(wc, wc.element)
)
