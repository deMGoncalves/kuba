import * as f from '@rex/f'
import appendStyle from './appendStyle'
import createWorker from './createWorker'
import dispatchEvent from './dispatchEvent'
import reflow from './reflow'
import render from './render'

export default (schema) =>
  customElements.define(schema.tag, class extends HTMLElement {
    #worker

    static get observedAttributes () {
      return []
    }

    constructor () {
      super()
      return this
    }

    adoptedCallback () {
      return this
    }

    attributeChangedCallback () {
      return this
    }

    connectedCallback () {
      appendStyle(`https://${schema.host}/style.css`)
      f.lazyLoad(this, () => this.start())
      return this
    }

    disconnectedCallback () {
      this.#worker.terminate()
      return this
    }

    start () {
      this.#worker = createWorker(`https://${schema.host}/script.js`)
      this.#worker.addEventListener('message', f.chain(render(this), reflow))

      this.addEventListener('awp:event', dispatchEvent(this.#worker))
      return this
    }
  })
