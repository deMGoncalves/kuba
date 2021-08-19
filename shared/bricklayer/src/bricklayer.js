import attrs from './attrs'
import hooks from './hooks'
import render from './render'
import stub from './stub'

function bricklayer (descriptor) {
  customElements.define(
    descriptor.el,
    class extends HTMLElement {
      #adopted
      #attributeChanged
      #attrs
      #connected
      #disconnected
      #element
      #id
      #state
      #useEffect

      get adopted () {
        return this.#adopted ??= stub
      }

      get attributeChanged () {
        return this.#attributeChanged ??= stub
      }

      get attrs () {
        return this.#attrs ??= attrs(this)
      }

      get component () {
        return descriptor.component ??= stub
      }

      get connected () {
        return this.#connected ??= stub
      }

      get disconnected () {
        return this.#disconnected ??= stub
      }

      get element () {
        return this.#element
      }

      get hooks () {
        return hooks(this)
      }

      get id () {
        return this.#id ??= 0
      }

      get state () {
        return this.#state ??= []
      }

      get useEffect () {
        return this.#useEffect ??= stub
      }

      attributeChangedCallback (key, oValue, nValue) {
        this.attributeChanged(key, oValue, nValue)
        return this
      }

      adoptedCallback () {
        this.adopted()
        return this
      }

      connectedCallback () {
        render(this)
        this.connected()
        return this
      }

      disconnectedCallback () {
        this.disconnected()
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

      setElement (element) {
        this.#element = element
        return this
      }

      setUseEffect (listener) {
        this.#useEffect = listener
        return this
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
