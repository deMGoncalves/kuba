import h, { render } from '@rex/h'
import * as f from '@rex/f'
import gtag from './gtag'

const append = Symbol('append')
const events = Symbol('events')
const id = Symbol('id')
const src = Symbol('src')
const trigger = Symbol('trigger')

customElements.define('pixel-gtag', class extends HTMLElement {
  get [events] () {
    return [
      ['js', new Date()],
      ['config', this[id]]
    ]
  }

  get [id] () {
    return this.dataset.id
  }

  get [src] () {
    return `https://www.googletagmanager.com/gtag/js?id=${this[id]}`
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
    f.forEach(this[events], (event) => gtag(...event))
    return this
  }
})
