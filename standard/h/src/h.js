import * as f from '@kuba/f'
import Component from './component'
import Tag, { Custom } from './tag'

export default (target, props, ...children) =>
  f.cond(
    [Tag.is, Tag.create],
    [Component.is, Component.execute],
    [Custom.is, Custom.create]
  )(target, { ...props }, f.flatten(children))
