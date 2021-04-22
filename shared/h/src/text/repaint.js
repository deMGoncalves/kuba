import * as f from '@kuba/f'
import { after } from '@kuba/hook'
import dom from '@kuba/h/src/dom'

const repaint = (text) =>
  f.always(text)(dom.query(text.id).textContent = text.content)

export default after(repaint)
