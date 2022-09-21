import * as f from '@kuba/f'
import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import Events from './events'
import lifeCycle, { event } from './lifeCycle'
import lazy from './lazy'
import parser from './parser'

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
    return this.#element ??= parser.create(this)
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
    return f.toLower(this.#name)
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
    parser.addEventListener(this, name, listener)
    return this
  }

  async append (children) {
    await parser.append(this, children)
    return this
  }

  appendChild (child) {
    parser.appendChild(this, child)
    return this
  }

  connect (entity) {
    this.#entity = entity
    return this
  }

  insertAdjacent (child) {
    parser.insertAdjacent(this, child)
    return this
  }

  mount () {
    lifeCycle.dispatch(this, event.WILL_MOUNT)
    Promise
      .all([
        this.children.mount(),
        this.events.mount(),
        this.attributes.mount(),
        this.className.mount()
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_MOUNT))
    return this.element
  }

  remove () {
    lifeCycle.dispatch(this, event.WILL_UNMOUNT)
    Promise
      .all([
        parser.remove(this)
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UNMOUNT))
    return this
  }

  removeAttribute (key) {
    parser.removeAttribute(this, key)
    return this
  }

  removeEventListener (name) {
    parser.removeEventListener(this, name)
    return this
  }

  replace (child) {
    lifeCycle.dispatch(this, event.WILL_UNMOUNT)
    Promise
      .all([
        parser.replaceChild(this, child)
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UNMOUNT))
    return this
  }

  setAttribute (key, value) {
    parser.setAttribute(this, key, value)
    return this
  }

  setClassName (value) {
    parser.setClassName(this, value)
    return this
  }

  update (element) {
    lifeCycle.dispatch(this, event.WILL_UPDATE)
    Promise
      .all([
        this.attributes.update(element.attributes),
        this.children.update(element.children),
        this.className.update(element.className),
        this.events.update(element.events)
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UPDATE))
    return this
  }

  [f.dunder.isEmpty] () {
    return f.F()
  }

  static create () {
    return lazy(Element, ...arguments)
  }

  static is (target) {
    return f.test(/^\w+$/, target)
  }
}

export default Element
