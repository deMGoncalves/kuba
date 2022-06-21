import * as f from '@kuba/f'
import { Children } from './element'
import { lazy, parser } from '@kuba/h'

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
    return this.#element ??= parser.mount(this)
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
    f.last(this.children).insertAdjacent(child)
    return this
  }

  mount () {
    this.willMount()
    return Promise
      .all([
        this.children.mount()
      ])
      .then(() => this.didMount())
      .then(() => this.element)
  }

  remove () {
    this.willUnmount()
    this.children.unmount()
    this.didUnmount()
    return this
  }

  replace (fragment) {
    this.willUnmount()
    Promise
      .all([
        this.children.update(fragment.children)
      ])
      .then(() => this.didUnmount())
    return this
  }

  update (fragment) {
    this.willUpdate()
    Promise
      .all([
        this.children.update(fragment.children)
      ])
      .then(() => this.didUpdate())
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
    return lazy(Fragment, ...arguments)
  }
}

export default Fragment.execute
