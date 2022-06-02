import * as f from '@kuba/f'
import { eager } from '@kuba/h'
import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import Events from './events'

class Element {
  #attributes
  #children
  #className
  #element
  #entity
  #events
  #is
  #name
  #slot
  #uid

  get attributes () {
    return this.#attributes
  }

  get children () {
    return this.#children
  }

  get className () {
    return this.#className
  }

  get element () {
    return this.#element ??= document.createElement(this.name, { is: this.is })
  }

  get entity () {
    return this.#entity
  }

  get events () {
    return this.#events
  }

  get is () {
    return this.#is
  }

  get isNode () {
    return f.T()
  }

  get name () {
    return this.#name
  }

  get slot () {
    return this.#slot
  }

  get type () {
    return 1
  }

  get uid () {
    return this.#uid
  }

  constructor (tagName, props, children) {
    this.#attributes = Attributes.create(props, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(props, this)
    this.#events = Events.create(props, this)
    this.#is = props.is
    this.#name = tagName
    this.#slot = props.slot
    this.#uid = props.uid
  }

  addEventListener (name, listener) {
    this.element[name] = listener
    return this
  }

  append (children) {
    return Promise
      .all(f.map(children, child => child.mount()))
      .then(children => this.element.append(...children))
      .then(() => this)
  }

  appendChild (child) {
    requestAnimationFrame(async () => (
      this.element.appendChild(await child.mount())
    ))
    return this
  }

  connect (entity) {
    this.#entity = entity
    return this
  }

  didMount () {
    requestIdleCallback(() => (
      this?.entity?.[f.dunder.didMount]?.()
    ))
    return this
  }

  didUnmount () {
    requestIdleCallback(() => (
      this?.entity?.[f.dunder.didUnmount]?.()
    ))
    return this
  }

  didUpdate () {
    requestIdleCallback(() => (
      this?.entity?.[f.dunder.didUpdate]?.()
    ))
    return this
  }

  insertAdjacent (child) {
    requestAnimationFrame(async () => (
      this.element.insertAdjacentElement('afterend', await child.mount())
    ))
    return this
  }

  mount () {
    this.willMount()
    this.attributes.mount()
    this.children.mount()
    this.className.mount()
    this.events.mount()
    this.didMount()
    return Promise.resolve(this.element)
  }

  remove () {
    this.willUnmount()
    requestAnimationFrame(() => (
      this.element.remove(),
      this.didUnmount()
    ))
    return this
  }

  removeAttribute (key) {
    this.element.removeAttribute(key)
    return this
  }

  removeEventListener (name) {
    this.element[name] = undefined
    return this
  }

  replace (child) {
    this.willUnmount()
    requestAnimationFrame(async () => (
      this.element.parentNode.replaceChild(await child.mount(), this.element),
      this.didUnmount()
    ))
    return this
  }

  setAttribute (key, value) {
    value
      ? this.element.setAttribute(key, value)
      : this.element.removeAttribute(key)
    return this
  }

  setClassName (value) {
    this.element.className = value
    return this
  }

  async update (element) {
    this.willUpdate()
    this.attributes.update(element.attributes)
    await this.children.update(element.children)
    this.className.update(element.className)
    this.events.update(element.events)
    this.didUpdate()
    return this
  }

  willMount () {
    this?.entity?.[f.dunder.willMount]?.()
    return this
  }

  willUnmount () {
    this?.ntity?.[f.dunder.willUnmount]?.()
    return this
  }

  willUpdate () {
    this?.entity?.[f.dunder.willUpdate]?.()
    return this
  }

  [f.dunder.isEmpty] () {
    return f.F()
  }

  static create () {
    return eager(Element, ...arguments)
  }

  static is (target) {
    return f.test(/^\w+$/, target)
  }
}

export default Element
