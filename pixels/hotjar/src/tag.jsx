import h, { render } from '@rex/h'
import './hj'

const append = Symbol('append')
const id = Symbol('id')
const src = Symbol('src')
const trigger = Symbol('trigger')

customElements.define('pixel-hotjar', class extends HTMLElement {
  get [id] () {
    return this.dataset.id
  }

  get [src] () {
    return `https://static.hotjar.com/c/hotjar-${this[id]}.js?sv=6`
  }

  constructor () {
    super()
    this[trigger]()
  }

  connectedCallback () {
    this[append]()
    return this
  }

  [append] () {
    render(this, <script src={this[src]} async />)
    return this
  }

  [trigger] () {
    window._hjSettings = { hjid: this[id], hjsv: 6 }
    return this
  }
})
