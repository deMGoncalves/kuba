import { render } from '@kuba/h'
import * as f from '@kuba/f'

function bricklayer (descriptor) {
  customElements.define(
    descriptor.el,
    class extends HTMLElement {
      #adopted = f.always(null)
      #attributeChanged = f.always(null)
      #connected = f.always(null)
      #disconnected = f.always(null)
      #element
      #id = 0
      #state = []
      #useEffect = f.always(null)

      get attrs () {
        return new Proxy(this, {
          get: (target, key) => target.getAttribute(key)
        })
      }

      get hooks () {
        return {
          adopted: (listener) => this.setAdopted(listener),
          attributeChanged: (listener) => this.setAttributeChanged(listener),
          connected: (listener) => this.setConnected(listener),
          disconnected: (listener) => this.setDisconnected(listener),
          useEffect: (listener) => this.setUseEffect(listener),
          useState: (value) => this.useState(value)
        }
      }

      get id () {
        return this.#id
      }

      attributeChangedCallback (...args) {
        this.execAttribureChanged(...args)
        return this
      }

      adoptedCallback () {
        this.execAdopted()
        return this
      }

      connectedCallback () {
        this.render()
        this.execUseEffect()
        this.execConnected()
        return this
      }

      disconnectedCallback () {
        this.execDisconnected()
        return this
      }

      constructor () {
        super()
        this.attachShadow({ mode: 'open' })
      }

      execAdopted () {
        this.#adopted()
        return this
      }

      execAttribureChanged (...args) {
        this.#attributeChanged(...args)
        return this
      }

      execConnected () {
        this.#connected()
        return this
      }

      execDisconnected () {
        this.#disconnected()
        return this
      }

      execUseEffect () {
        this.rewindId()
        this.#useEffect()
        return this
      }

      reducer (id) {
        return (value) => (
          this.#state[id] = value,
          this.reflow(),
          this.execUseEffect()
        )
      }

      reflow () {
        this.#element.reflow(descriptor.component(this.attrs, this.hooks))
        return this
      }

      render () {
        render(this.shadowRoot, (this.#element = descriptor.component(this.attrs, this.hooks)))
        return this
      }

      rewindId () {
        this.#id = 0
        return this
      }

      nextId () {
        this.#id++
        return this
      }

      setAdopted (listener) {
        this.#adopted = listener
        return this
      }

      setAttributeChanged (listener) {
        this.#attributeChanged = listener
        return this
      }

      setConnected (listener) {
        this.#connected = listener
        return this
      }

      setDisconnected (listener) {
        this.#disconnected = listener
        return this
      }

      setUseEffect (listener) {
        this.#useEffect = listener
        return this
      }

      setValue (value) {
        return this.#state[this.id] = f.or(this.#state[this.id], value)
      }

      useState (value) {
        this.nextId()
        return [
          this.setValue(value),
          this.reducer(this.id)
        ]
      }

      static get observedAttributes () {
        return descriptor.observed
      }
    },
    {
      extends: descriptor.extends
    }
  )
}

export default bricklayer
