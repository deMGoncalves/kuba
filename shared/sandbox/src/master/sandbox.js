import * as f from '@rex/f'

customElements.define(
  'awp-sandbox',
  class extends HTMLElement {
    get stats () {
      return this.content
    }

    get tagName () {
      return this.name
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
      return this
    }

    disconnectedCallback () {
      return this
    }
  },
  {
    extends: 'meta'
  }
)
