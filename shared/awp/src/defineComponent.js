import * as f from '@rex/f'
import dispatchEvent from './dispatchEvent'
import reflow from './reflow'
import render from './render'

export default (tagName, worker) =>
  customElements.define(tagName, class extends HTMLElement {
    #worker

    static get observedAttributes () {
      return []
    }

    constructor () {
      super()
      this.#worker = worker()
      this.addEventListener('awp:event', dispatchEvent(this.#worker))
    }

    adoptedCallback () {
      return this
    }

    attributeChangedCallback () {
      return this
    }

    connectedCallback () {
      this.#worker.addEventListener('message', f.chain(render(this), reflow))
      return this
    }

    disconnectedCallback () {
      this.#worker.terminate()
      return this
    }
  })
