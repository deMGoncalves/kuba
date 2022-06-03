import * as f from '@kuba/f'
import Component from './component'
import Tag, { Custom } from './tag'

/**
 * TODO: Porque o custom nao pode ficar dentro
 * do Tag.is e Tag.create
 */
export default (target, props, ...children) =>
  f.cond(
    [Tag.is, Tag.create],
    [Component.is, Component.execute],
    [Custom.is, Custom.create]
  )(target, { ...props }, f.flatten(children))
