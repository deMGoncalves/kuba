import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'
import reflow from '@rex/h/src/reflow'
import createVElementToCompare from './createVElementToCompare.js'

export default (instance, component, children) => {
  f.assign(instance, {
    [d.element]: createVElementToCompare(instance, component, children),

    [d.reflow]: f.idle(function () {
      reflow(this[d.element], component(this, children))
    })
  })

  return instance[d.element]
}
