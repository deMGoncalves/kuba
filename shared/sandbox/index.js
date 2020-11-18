class Sandbox extends HTMLMetaElement {
  connectedCallback () {
    const script = this.content
    customElements.define(this.name, class extends HTMLElement {
      #worker
      connectedCallback () {
        this.#worker = new Worker(script)
        this.#worker.addEventListener('message', console.log)
      }
    })
  }
}

customElements.define('rex-sandbox', Sandbox, { extends: 'meta' })
