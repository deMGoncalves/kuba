import * as f from '@kuba/f'
import fragment from './fragment'
import tag from './tag'
import text from './text'

export default f.cond(
  [tag.is, tag.execute],
  [text.is, text.execute],
  [fragment.is, fragment.execute]
)
