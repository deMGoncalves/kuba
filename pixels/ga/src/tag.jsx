import h, { render } from '@rex/h'
import * as f from '@rex/f'
import ga from './ga'

const append = Symbol('append')
const events = Symbol('events')
const id = Symbol('id')
const src = Symbol('src')
const trigger = Symbol('trigger')

customElements.define('pixel-ga', class extends HTMLElement {
  get [events] () {
    return [
      ['create', this[id], 'auto'],
      ['send', 'pageview']
    ]
  }

  get [id] () {
    return this.dataset.id
  }

  get [src] () {
    return 'https://www.google-analytics.com/analytics.js'
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
    f.forEach(this[events], (event) => ga(...event))
    return this
  }
})
