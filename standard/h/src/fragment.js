import * as f from '@kuba/f'
import Children from './children'
import lazy from './lazy'
import lifeCycle, { event } from './lifeCycle'
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

  insertAdjacent (child) {
    f.last(this.children).insertAdjacent(child)
    return this
  }

  mount () {
    lifeCycle.dispatch(this, event.WILL_MOUNT)
    return Promise
      .all([
        this.children.mount()
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_MOUNT))
      .then(() => this.element)
  }

  remove () {
    lifeCycle.dispatch(this, event.WILL_UNMOUNT)
    Promise
      .all([
        this.children.unmount()
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UNMOUNT))
    return this
  }

  replace (fragment) {
    lifeCycle.dispatch(this, event.WILL_UNMOUNT)
    Promise
      .all([
        this.children.update(fragment.children)
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UNMOUNT))
    return this
  }

  update (fragment) {
    lifeCycle.dispatch(this, event.WILL_UPDATE)
    Promise
      .all([
        this.children.update(fragment.children)
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UPDATE))
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
