import IMask from 'imask'
import mapper from './mapper'

class Input extends HTMLInputElement {
  #imask

  get unmaskedValue () {
    return this.#imask.unmaskedValue
  }

  connectedCallback () {
    this.#imask = new IMask(this, mapper(this.type))
    return this
  }
}

customElements.define('input-mask', Input, { extends: 'input' })
