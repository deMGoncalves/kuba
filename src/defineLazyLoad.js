class LazyLoad extends HTMLImageElement {
  connectedCallback () {
    this.dataset.src = this.getAttribute('src')
    this.setAttribute('src', '')
    return this
  }
}

customElements.define('lazy-load', LazyLoad, { extends: 'img' })
