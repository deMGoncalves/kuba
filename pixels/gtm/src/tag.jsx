import h, { Fragment } from '@rex/h'

customElements.define('pixel-gtm', class extends HTMLElement {
  connectedCallback () {
    window.requestAnimationFrame(() =>
      this.append(
        <>
          <h1>Rex • Pixel APP</h1>
          <strong>Simples, pequeno e imperfeito - "Uma visão além da programação"</strong>
        </>
      )
    )
    return this
  }
})
