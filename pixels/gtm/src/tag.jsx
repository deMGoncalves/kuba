import h, { render } from '@rex/h'

customElements.define('pixel-gtm', class extends HTMLElement {
  connectedCallback () {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    })

    render(this, <script src={`https://www.googletagmanager.com/gtm.js?id=${this.dataset.id}`} async />)

    return this
  }
})
