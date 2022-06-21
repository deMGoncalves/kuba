import * as f from '@kuba/f'

const createDocumentFragment = f.memoize(() => (
  document.createDocumentFragment()
))

f.assign(createDocumentFragment, {
  exec: () => (
    createDocumentFragment()
  ),

  is: f.compose(f.equal(11), f.prop('type'))
})

export default createDocumentFragment
