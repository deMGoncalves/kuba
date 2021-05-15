import * as f from '@kuba/f'
import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import Events from './events'
import notCustomElement from './notCustomElement'
import paint from './paint'
import rewind from './rewind'
import swapTag from './swapTag'

@paint
class Tag {
  #attributes
  #children
  #className
  #events
  #id
  #is
  #slot
  #name

  get attributes () {
    return this.#attributes
  }

  get children () {
    return this.#children
  }

  get className () {
    return this.#className
  }

  get events () {
    return this.#events
  }

  get id () {
    return this.#id
  }

  get is () {
    return this.#is
  }

  get name () {
    return this.#name
  }

  get slot () {
    return this.#slot
  }

  get type () {
    return 1
  }

  get [f.magic('isNode')] () {
    return f.T()
  }

  constructor (tagName, props, children) {
    this.#attributes = Attributes.create(props, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(props, this)
    this.#events = Events.create(props, this)
    this.#id = Symbol(tagName)
    this.#is = props.is
    this.#name = tagName
    this.#slot = props.slot
  }

  reflow (other) {
    swapTag(this, other)
    rewind(this, other)
    notCustomElement(this) && (
      this.children.reflow(other.children)
    )
    return this
  }

  static create (tagName, props, children) {
    return new Tag(tagName, props, children)
  }

  static is (nameOrComponent) {
    return f.is(String, nameOrComponent)
  }
}

export default Tag
