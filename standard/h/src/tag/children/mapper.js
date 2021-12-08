import * as f from '@kuba/f'
import { Text } from '@kuba/h'

export default (children) =>
  f.map(children, (child) =>
    Text.is(child) ? Text.create(child) : child)
