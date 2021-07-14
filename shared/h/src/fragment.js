import * as f from '@kuba/f'
import Children from '@kuba/h/src/tag/children'

class Fragment {
  #children
  #element
  #slot

  get children () {
    return this.#children
  }

  get element () {
    return this.#element ??= document.createDocumentFragment()
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

  append (child) {
    this.element.append(child)
    return this
  }

  paint () {
    this.children.paint()
    return this.element
  }

  reflow (fragment) {
    this.children.reflow(fragment.children)
    return this
  }
  
  replaceChild (current, child) {
    current.parentNode.replaceChild(child, current)
    return this
  }

  static execute (props, children) {
    return new Fragment(props, children)
  }
}

export default Fragment.execute
