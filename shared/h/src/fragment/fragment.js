import * as f from '@kuba/f'
import Children from '@kuba/h/src/tag/children'
import paint from './paint'

@paint
class Fragment {
  #children
  #id
  #slot

  get children () {
    return this.#children
  }

  get id () {
    return this.#id
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

  get [f.magic('isNode')] () {
    return f.T()
  }

  constructor (props, children) {
    this.#children = Children.create(children)
    this.#id = Symbol(this.name)
    this.#slot = props.slot
  }

  reflow (other) {
    this.children.reflow(other.children)
    return this
  }

  static execute (props, children) {
    return new Fragment(props, children)
  }
}

export default Fragment.execute
