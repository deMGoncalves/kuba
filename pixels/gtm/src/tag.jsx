import h, { render } from '@rex/h'

const event = Symbol('event')
const src = Symbol('src')

customElements.define('pixel-gtm', class extends HTMLElement {
  get [event] () {
    return {
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    }
  }

  get [src] () {
    return `https://www.googletagmanager.com/gtm.js?id=${this.dataset.id}`
  }

  connectedCallback () {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(this[event])

    render(this, <script src={this[src]} async />)
    return this
  }
})
