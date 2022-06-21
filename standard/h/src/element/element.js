import * as f from '@kuba/f'
import { lazy, parser } from '@kuba/h'
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
    return this.#element ??= parser.mount(this)
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
    f.frame(async () =>
      this.element.appendChild(await child.mount())
    )()
    return this
  }

  connect (entity) {
    this.#entity = entity
    return this
  }

  didMount () {
    f.idle(() =>
      this?.entity?.[f.dunder.didMount]?.()
    )()
    return this
  }

  didUnmount () {
    f.idle(() =>
      this?.entity?.[f.dunder.didUnmount]?.()
    )()
    return this
  }

  didUpdate () {
    f.idle(() =>
      this?.entity?.[f.dunder.didUpdate]?.()
    )()
    return this
  }

  insertAdjacent (child) {
    f.frame(async () =>
      this.element.insertAdjacentElement('afterend', await child.mount())
    )()
    return this
  }

  mount () {
    this.willMount()
    return Promise
      .all([
        // this.attributes.mount(),
        this.children.mount(),
        // this.className.mount(),
        this.events.mount()
      ])
      .then(() => this.didMount())
      .then(() => this.element)
  }

  remove () {
    this.willUnmount()
    f.frame(() => (
      this.element.remove(),
      this.didUnmount()
    ))()
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
    f.frame(async () => (
      this.element.parentNode.replaceChild(await child.mount(), this.element),
      this.didUnmount()
    ))()
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

  update (element) {
    this.willUpdate()
    Promise
      .all([
        this.attributes.update(element.attributes),
        this.children.update(element.children),
        this.className.update(element.className),
        this.events.update(element.events)
      ])
      .then(() => this.didUpdate())
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
    return lazy(Element, ...arguments)
  }

  static is (target) {
    return f.test(/^\w+$/, target)
  }
}

export default Element
