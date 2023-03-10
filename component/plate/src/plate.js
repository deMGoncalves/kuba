import * as filter from '@kuba/filter'
import * as validator from '@kuba/validator'
import { paint, repaint } from '@kuba/h'
import component from './component'
import global from '@kuba/global'
import imask from '../../../.prelude/artifact/IMask/src'
import overload from '@kuba/overload'
import storage from './storage'

@paint(component)
@imask
class Plate {
  #state
  #value

  get state () {
    return (this.#state ??= '')
  }

  get value () {
    return (this.#value ??= global.plate)
  }

  @filter.value
  @validator.required
  @storage
  onChange (value) {
    this.#value = value
    return this
  }

  [imask.settings] () {
    return {
      element: this[paint.rootElement]().querySelector('input'),
      options: {
        mask: 'aaa0[a0]00'
      }
    }
  }

  @repaint
  @overload(storage.outlet)
  [validator.outlet] (state) {
    this.#state = state
    return this
  }
}

export default Plate
