import * as f from '@kuba/f'
import { after } from '@kuba/hook'
import dom from '@kuba/h/src/dom'

const repaint = (className) =>
  f.always(className)(dom.query(className.target.id).className = className.value)

export default after(repaint)
