import * as f from '@kuba/f'
import { Children } from './element'
import { dispatch, event } from './lifeCycle'
import lazy from './lazy'
import parser from './parser'

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
    return this.#element ??= parser.create(this)
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

  async append (children) {
    await parser.append(this, children)
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

  #didMount () {
    dispatch(this, event.DID_MOUNT)
    return this
  }

  #didUnmount () {
    dispatch(this, event.DID_UNMOUNT)
    return this
  }

  #didUpdate () {
    dispatch(this, event.DID_UPDATE)
    return this
  }

  insertAdjacent (child) {
    f.last(this.children).insertAdjacent(child)
    return this
  }

  mount () {
    this.#willMount()
    return Promise
      .all([
        this.children.mount()
      ])
      .then(() => this.#didMount())
      .then(() => this.element)
  }

  remove () {
    this.#willUnmount()
    this.children.unmount()
    this.#didUnmount()
    return this
  }

  replace (fragment) {
    this.#willUnmount()
    Promise
      .all([
        this.children.update(fragment.children)
      ])
      .then(() => this.#didUnmount())
    return this
  }

  update (fragment) {
    this.#willUpdate()
    Promise
      .all([
        this.children.update(fragment.children)
      ])
      .then(() => this.#didUpdate())
    return this
  }

  #willMount () {
    dispatch(this, event.WILL_MOUNT)
    return this
  }

  #willUnmount () {
    dispatch(this, event.WILL_UNMOUNT)
    return this
  }

  #willUpdate () {
    dispatch(this, event.WILL_UPDATE)
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
