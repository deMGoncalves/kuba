import * as f from '@kuba/f'

const createTextNode = f.memoize((content) => (
  document.createTextNode(content)
))

f.assign(createTextNode, {
  exec: (text) => (
    createTextNode(text.content)
  ),

  is: f.compose(f.equal(3), f.prop('type'))
})

export default createTextNode
