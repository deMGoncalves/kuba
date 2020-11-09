import * as f from '@rex/f'

const reflow = f.magic('h/reflow')

export default (mathod) =>
  function () {
    return f.always(mathod.call(this, ...arguments))(this[reflow] && this[reflow]())
  }
