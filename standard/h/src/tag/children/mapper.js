import * as f from '@kuba/f'
import { Entity, Text } from '@kuba/h'

export default (children) =>
  f.map(children, f.cond(
    [Entity.is, Entity.transform],
    [Text.is, Text.create],
    [f.T, (c) => c]
  ))
