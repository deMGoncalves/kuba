import * as f from '@kuba/f'
import Entity from './entity'
import Text from './text'

export default (children) =>
  f.map(children, f.cond(
    [Entity.is, Entity.parse],
    [Text.is, Text.create],
    [f.T, f.repass]
  ))
