import h, { render } from '@rex/h'

const event = Symbol('event')
const src = Symbol('src')

customElements.define('pixel-analytics', class extends HTMLElement {
  get [event] () {
    return [
      ['js', new Date()],
      ['config', this.dataset.id]
    ]
  }

  get [src] () {
    return `https://www.googletagmanager.com/gtag/js?id=${this.dataset.id}`
  }

  connectedCallback () {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(...this[event])

    render(document.head, <script src={this[src]} async />)
    return this
  }
})
