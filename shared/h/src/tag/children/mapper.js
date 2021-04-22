import * as f from '@kuba/f'
import Text from '@kuba/h/src/text'

export default (children) =>
  f.map(children, (textOrTag) =>
    Text.is(textOrTag) ? Text.create(textOrTag) : textOrTag)
