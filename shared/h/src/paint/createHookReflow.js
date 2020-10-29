import * as f from '@rex/f'
import reflow from '../reflow'

export default (target, component, children) => {
  f.assign(target, {
    __element__: component(target, children),

    __reflow__: f.idle(function () {
      reflow(this.__element__, component(this, children))
    })
  })

  f.assign(target.__element__, {
    __target__: target
  })

  return target.__element__
}
