import * as f from '@kuba/f'
import Text from '@kuba/h/src/text'

export default (children) =>
  f.map(children, (child) =>
    Text.is(child) ? Text.create(child) : child)
