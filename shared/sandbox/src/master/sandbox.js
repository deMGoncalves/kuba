import * as f from '@rex/f'
import dispatchEvent from './dispatchEvent'
import reflow from './reflow'
import render from './render'

export default (tagName, worker) =>
  customElements.define(tagName, class extends HTMLElement {
    static get observedAttributes () {
      return []
    }

    constructor () {
      super()
      this.addEventListener('awp:event', dispatchEvent(worker))
    }

    adoptedCallback () {
      return this
    }

    attributeChangedCallback () {
      return this
    }

    connectedCallback () {
      worker.addEventListener('message', f.chain(render(this), reflow))
      return this
    }

    disconnectedCallback () {
      worker.terminate()
      return this
    }
  })
