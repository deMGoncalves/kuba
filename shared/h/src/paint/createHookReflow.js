import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'
import reflow from '@rex/h/src/reflow'
import createComponent from './createComponent.js'

export default (klass, component, children) =>
  f.assign(klass, {
    [d.element]: createComponent(klass, component, children),
    [d.reflow]: f.idle(() => reflow(klass[d.element], component(klass, children)))
  })[d.element]
