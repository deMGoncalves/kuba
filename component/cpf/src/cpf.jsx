import * as filter from '@kuba/filter'
import * as validator from '@kuba/validator'
import { paint, repaint } from '@kuba/h'
import component from './component'
import imask from '../../../.prelude/artifact/IMask/src'
import pattern from './pattern'

@paint(component)
@imask
class CPF {
  #state
  #value

  get state () {
    return (this.#state ??= '')
  }

  get value () {
    return (this.#value ??= '')
  }

  @filter.value
  @validator.required
  @validator.pattern(pattern)
  onChange (value) {
    this.#value = value
    return this
  }

  [imask.settings] () {
    return {
      element: this[paint.rootElement]().querySelector('input'),
      options: {
        mask: '000.000.000-00'
      }
    }
  }

  @repaint
  [validator.outlet] (state) {
    this.#state = state
    return this
  }
}

export default CPF
