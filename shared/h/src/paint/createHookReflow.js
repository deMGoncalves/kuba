import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'
import reflow from '@rex/h/src/reflow'

export default (instance, component, children) => {
  f.assign(instance, {
    [d.element]: f.assign(component(instance, children), { [d.target]: instance }),

    [f.magic('h/reflow')]: f.idle(function () {
      reflow(this[d.element], component(this, children))
    })
  })

  return instance[d.element]
}
