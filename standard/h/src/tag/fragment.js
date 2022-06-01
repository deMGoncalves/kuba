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

  async append (...children) {
    await Promise
      .all(f.map(children, child => child.mount()))
      .then(children => this.element.append(...children))
    return this
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

  insertAdjacent (child) {
    this.children.last.insertAdjacent(child)
    return this
  }

  async mount () {
    this.willMount()
    await this.children.mount()
    this.didMount()
    return this.element
  }

  reflow (fragment) {
    this.willUpdate()
    this.children.reflow(fragment.children)
    this.didUpdate()
    return this
  }

  remove () {
    this.willUnmount()
    this.children.drop()
    this.didUnmount()
    return this
  }

  replace (fragment) {
    this.willUnmount()
    this.reflow(fragment)
    this.didUnmount()
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

  static execute (...args) {
    return eager(Fragment, ...args)
  }
}

export default Fragment
