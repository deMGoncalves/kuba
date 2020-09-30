import * as f from '@rex/f'

export default (mathod) =>
  function () {
    return f.always(mathod.call(this, ...arguments))(this.__reflow__ && this.__reflow__())
  }
