import h, { render } from '@kuba/h'
import * as f from '@kuba/f'

const render = (textContent) =>
  document.head.append(h('style', {}, textContent).paint())

export default f.curry(f.frame(render))
