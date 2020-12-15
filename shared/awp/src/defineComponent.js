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
    }

    adoptedCallback () {
      return this
    }

    attributeChangedCallback () {
      return this
    }

    connectedCallback () {
      f.lazyLoad(this, () => this.start())
      return this
    }

    disconnectedCallback () {
      this.#worker.terminate()
      return this
    }

    start () {
      this.#worker = worker()
      this.#worker.addEventListener('message', f.chain(render(this), reflow))

      this.addEventListener('awp:event', dispatchEvent(this.#worker))
      return this
    }
  })
