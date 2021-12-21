import * as f from '@kuba/f'
import Children from './children'

class Fragment {
  #children
  #element
  #entity
  #slot

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

  constructor (props, children) {
    this.#children = Children.create(children, this)
    this.#slot = props.slot
  }

  append (...children) {
    this.element.append(...f.map(children, c => c.paint()))
    return this
  }

  appendChild (child) {
    this.insertAdjacentElement('afterend', child.paint())
    return this
  }

  connectEntity (entity) {
    this.#entity = entity
    return this
  }

  didMount () {
    f.idle(() =>
      this.#entity?.[f.magic('didMount')]?.())()
    return this
  }

  didUnmout () {
    f.idle(() =>
      this.#entity?.[f.magic('didUnmount')]?.())()
    return this
  }

  didUpdate () {
    f.idle(() =>
      this.#entity?.[f.magic('didUpdate')]?.())()
    return this
  }

  insertAdjacentElement (position, element) {
    this.children.last.insertAdjacentElement(position, element)
    return this
  }

  paint () {
    this.willMount()
    this.children.paint()
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
    this.#entity?.[f.magic('willMount')]?.()
    return this
  }

  willUnmount () {
    this.#entity?.[f.magic('willUnmount')]?.()
    return this
  }

  willUpdate () {
    this.#entity?.[f.magic('willUpdate')]?.()
    return this
  }

  [f.magic('isEmpty')] () {
    return f.F()
  }

  static execute (props, children) {
    return new Fragment(props, children)
  }
}

export default Fragment
