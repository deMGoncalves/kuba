import * as filter from '@kuba/filter'
import * as validator from '@kuba/validator'
import { paint, repaint } from '@kuba/h'
import component from './component'
import props from '@kuba/props'

@paint(component)
@props
class Password {
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

  @repaint
  [validator.outlet] (state) {
    this.#state = state
    return this
  }
}

export default Password
