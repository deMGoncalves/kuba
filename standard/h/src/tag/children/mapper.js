import * as f from '@kuba/f'
import { Text } from '@kuba/h'
import Entity from './entity'

export default (children) =>
  f.map(children, f.cond(
    [Entity.is, Entity.parse],
    [Text.is, Text.create],
    [f.T, (c) => c]
  ))
