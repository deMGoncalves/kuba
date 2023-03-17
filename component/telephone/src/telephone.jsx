import * as filter from '@kuba/filter'
import * as validator from '@kuba/validator'
import { paint, repaint } from '@kuba/h'
import component from './component'
import imask from '@kuba/imask'

@paint(component)
@imask
class Telephone {
  #state
  #value

  get state () {
    return (this.#state ??= '')
  }

  get value () {
    return (this.#value ??= '')
  }

  constructor (props) {
    this.#value = props.value
  }

  @filter.value
  @validator.required
  onChange (value) {
    this.#value = value
    return this
  }

  [imask.settings] () {
    return {
      element: this[paint.rootElement]().querySelector('input'),
      options: {
        mask: [
          { mask: '+{55} (00) 0000-0000' },
          { mask: '+{55} (00) 0 0000-0000' }
        ]
      }
    }
  }

  @repaint
  [validator.outlet] (state) {
    this.#state = state
    return this
  }
}

export default Telephone
