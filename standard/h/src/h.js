import * as f from '@kuba/f'
import Component from './component'
import Element, { Custom } from './element'

/**
 * TODO: Porque o custom nao pode ficar dentro
 * do Element.is e Element.create
 */
export default (target, props, ...children) =>
  f.cond(
    [Element.is, Element.create],
    [Component.is, Component.execute],
    [Custom.is, Custom.create]
  )(target, { ...props }, f.flatten(children))
