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

  append (...children) {
    this.element.append(...f.map(children, c => c.paint()))
    return this
  }

  appendChild (child) {
    this.element.appendChild(child.paint())
    return this
  }

  connect (entity) {
    this.#entity = entity
    return this
  }

  didMount () {
    this?.entity?.[f.dunder.didMount]?.()
    return this
  }

  didUnmount () {
    this?.entity?.[f.dunder.didUnmount]?.()
    return this
  }

  didUpdate () {
    this?.entity?.[f.dunder.didUpdate]?.()
    return this
  }

  insertAdjacent (vElement) {
    f.forEach(
      vElement,
      (c) => this.element.insertAdjacentElement('afterend', c.paint())
    )
    return this
  }

  paint () {
    this.willMount()
    this.attributes.paint()
    this.children.paint()
    this.className.paint()
    this.events.paint()
    this.didMount()
    return this.element
  }

  reflow (vElement) {
    this.willUpdate()
    this.attributes.reflow(vElement.attributes)
    this.className.reflow(vElement.className)
    this.events.reflow(vElement.events)
    this.children.reflow(vElement.children)
    this.didUpdate()
    return this
  }

  remove () {
    this.willUnmount()
    this.element.remove()
    this.didUnmount()
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

  replace (vElement) {
    this.willUnmount()
    this.element.parentNode.replaceChild(vElement.paint(), this.element)
    this.didUnmount()
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

  [f.dunder.forEach] () {
    return [this]
  }

  [f.dunder.isEmpty] () {
    return f.F()
  }

  static create (...args) {
    return eager(Element, ...args)
  }

  static is (target) {
    return f.test(/^\w+$/, target)
  }
}

export default Element
