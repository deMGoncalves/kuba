import * as f from '@rex/f'

const render = (element, children) =>
  window.requestAnimationFrame(() => element.append(children))

export default f.curry(render)
