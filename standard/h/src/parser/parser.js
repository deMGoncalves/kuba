import memoize from './memoize'

const parser = (tagName, is) => (
  document.createElement(tagName, { is })
)

export default memoize(parser)
