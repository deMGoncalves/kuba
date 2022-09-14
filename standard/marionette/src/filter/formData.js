import * as f from '@kuba/f'
import { before } from '@kuba/middleware'

const formData = (e) => (
  e.preventDefault(),
  [f.pairs([...new FormData(e.target)])]
)

export default before(formData)
