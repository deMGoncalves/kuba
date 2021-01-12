import * as f from '@rex/f'
import lazyLoad from '@rex/lazyLoad'
import appendStyle from './appendStyle'
import createWorker from './createWorker'
import dispatchEvent from './dispatchEvent'
import reflow from '@rex/awp/src/reflow'
import render from '@rex/awp/src/render'

const start = f.magic('start')

export default (schema) =>
  customElements.define(schema.tag, class extends HTMLElement {
    #script
    #style
    #worker

    static get observedAttributes () {
      return []
    }

    constructor () {
      super()
      this.#script = `https://${schema.host}/script.js`
      this.#style = `https://${schema.host}/style.css`
    }

    attributeChangedCallback () {
      return this
    }

    connectedCallback () {
      appendStyle(this.#style)
      lazyLoad(this, () => this[start]())
      return this
    }

    disconnectedCallback () {
      this.#worker.terminate()
      return this
    }

    [start] () {
      this.#worker = createWorker(this.#script)
      this.#worker.addEventListener('message', f.chain(render(this), reflow))

      this.addEventListener('awp:event', dispatchEvent(this.#worker))
      return this
    }
  })
