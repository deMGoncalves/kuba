import h, { render } from '@kuba/h'

export default (textContent) =>
  render(document.head, h('style', {}, textContent))
