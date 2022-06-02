import * as f from '@kuba/f'
import { eager } from '@kuba/h'
import Children from './children'

class Fragment {
  #children
  #element
  #entity
  #slot
  #uid

  get children () {
    return this.#children
  }

  get element () {
    return this.#element ??= document.createDocumentFragment()
  }

  get entity () {
    return this.#entity
  }

  get isNode () {
    return f.T()
  }

  get name () {
    return '#fragment'
  }

  get slot () {
    return this.#slot
  }

  get type () {
    return 11
  }

  get uid () {
    return this.#uid
  }

  constructor (props, children) {
    this.#children = Children.create(children, this)
    this.#slot = props.slot
    this.#uid = props.uid
  }

  append (children) {
    return Promise
      .all(f.map(children, child => child.mount()))
      .then(children => this.element.append(...children))
      .then(() => this)
  }

  appendChild (child) {
    this.insertAdjacent(child)
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
    f.last(this.children).insertAdjacent(child)
    return this
  }

  async mount () {
    this.willMount()
    await this.children.mount()
    this.didMount()
    return this.element
  }

  remove () {
    this.willUnmount()
    this.children.unmount()
    this.didUnmount()
    return this
  }

  async replace (fragment) {
    this.willUnmount()
    await this.children.update(fragment.children)
    this.didUnmount()
    return this
  }

  async update (fragment) {
    this.willUpdate()
    await this.children.update(fragment.children)
    this.didUpdate()
    return this
  }

  willMount () {
    this?.entity?.[f.dunder.willMount]?.()
    return this
  }

  willUnmount () {
    this?.entity?.[f.dunder.willUnmount]?.()
    return this
  }

  willUpdate () {
    this?.entity?.[f.dunder.willUpdate]?.()
    return this
  }

  [f.dunder.isEmpty] () {
    return f.F()
  }

  static execute () {
    return eager(Fragment, ...arguments)
  }
}

export default Fragment
