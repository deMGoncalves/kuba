import memoize from './memoize'

const createTextNode = (content) => (
  document.createTextNode(content)
)

export default memoize(createTextNode)
