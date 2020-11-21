import * as f from '@rex/f'
import reflow from '@rex/h/src/reflow'

const element = f.magic('h/element')

export default (instance, component, children) => {
  f.assign(instance, {
    [element]: f.assign(component(instance, children), { [f.magic('h/target')]: instance }),

    [f.magic('h/reflow')]: f.idle(function () {
      reflow(this[element], component(this, children))
    })
  })

  return instance[element]
}
