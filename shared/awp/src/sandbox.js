class Sandbox extends HTMLElement {
  #worker

  connectedCallback () {
    this.#worker = new Worker(new URL('@kuba/hero', import.meta.url))
    this.#worker.addEventListener('message', console.log)
    return this
  }

  disconnectedCallback () {
    this.#worker.terminate()
    return this
  }
}

customElements.define('sand-box', Sandbox)
