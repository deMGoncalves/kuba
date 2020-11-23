import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'

export default (mathod) =>
  function () {
    return f.always(mathod.call(this, ...arguments))(this[d.__reflow__] && this[d.__reflow__]())
  }
