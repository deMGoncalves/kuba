import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'
import reflow from '@rex/h/src/reflow'
import createComponent from './createComponent.js'

export default async function (klass, component, children) {
  f.assign(klass, {
    [d.__element__]: await createComponent(klass, component, children),
    [d.__reflow__]: f.idle(async () => reflow(klass[d.__element__], await component(klass, children)))
  })

  return klass[d.__element__]
}
