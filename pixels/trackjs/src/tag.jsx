import h, { render } from '@rex/h'
import trackJs from './trackjs'

const append = Symbol('append')
const token = Symbol('token')
const src = Symbol('src')
const trigger = Symbol('trigger')

customElements.define('pixel-trackjs', class extends HTMLElement {
  get [src] () {
    return 'https://cdn.trackjs.com/releases/current/tracker.js'
  }
  
  get [token] () {
    return this.dataset.token
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
    trackJs(this[token])
    return this
  }
})
