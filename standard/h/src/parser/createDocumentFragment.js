import * as f from '@kuba/f'

const fragment = document.createDocumentFragment()

const createDocumentFragment = () => (
  fragment.cloneNode(f.F())
)

export default createDocumentFragment
