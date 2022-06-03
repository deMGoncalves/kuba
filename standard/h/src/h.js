import * as f from '@kuba/f'
import Component from './component'
import CustomElement from './customElement'
import Element from './element'

export default (target, props, ...children) =>
  f.cond(
    [Element.is, Element.create],
    [Component.is, Component.execute],
    [CustomElement.is, CustomElement.create]
  )(target, { ...props }, f.flatten(children))
