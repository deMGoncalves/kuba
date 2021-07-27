import * as f from '@kuba/f'
import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import Events from './events'

class Tag {
  #attributes
  #children
  #className
  #element
  #events
  #is
  #slot
  #name

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

  constructor (tagName, props, children) {
    this.#attributes = Attributes.create(props, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(props, this)
    this.#events = Events.create(props, this)
    this.#is = props.is
    this.#name = tagName
    this.#slot = props.slot
  }

  addEventListener (name, listener) {
    this.element[name] = listener
    return this
  }

  append (...children) {
    this.element.append(...children)
    return this
  }

  paint () {
    this.attributes.paint()
    this.children.paint()
    this.className.paint()
    this.events.paint()
    return this.element
  }

  reflow (tag) {
    this.attributes.reflow(tag.attributes)
    this.className.reflow(tag.className)
    this.events.reflow(tag.events)
    this.children.reflow(tag.children)
    return this
  }

  remove () {
    this.element.remove()
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

  replaceChild (current, child) {
    this.element.replaceChild(child, current)
    return this
  }

  setAttribute (key, value) {
    this.element.setAttribute(key, value)
    return this
  }

  static create (tagName, props, children) {
    return new Tag(tagName, props, children)
  }

  static is (nameOrComponent) {
    return f.test(/^\w+$/, nameOrComponent)
  }
}

export default Tag
