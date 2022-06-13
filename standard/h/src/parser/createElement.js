import memoize from './memoize'

const createElement = (tagName, is) => (
  document.createElement(tagName, { is })
)

export default memoize(createElement)
