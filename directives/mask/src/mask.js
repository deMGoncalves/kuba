import IMask from 'imask'
import mapper from './mapper'

class Mask extends HTMLInputElement {
  #imask

  get unmaskedValue () {
    return this.#imask.unmaskedValue
  }

  connectedCallback () {
    this.#imask = new IMask(this, mapper(this.dataset.type))
    return this
  }
}

customElements.define('input-mask', Mask, { extends: 'input' })
