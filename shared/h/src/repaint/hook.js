import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'

export default (mathod) =>
  function () {
    return f.always(mathod.call(this, ...arguments))(this[d.reflow]())
  }
