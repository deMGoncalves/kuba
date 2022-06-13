import * as f from '@kuba/f'
import { lazy, parser } from '@kuba/h'

class Text {
  #content
  #element

  get content () {
    return this.#content ?? ''
  }

  get element () {
    return this.#element ??= parser.createTextNode(this.content)
  }

  get isNode () {
    return f.T()
  }

  get name () {
    return '#text'
  }

  get type () {
    return 3
  }

  constructor (content) {
    this.#content = content
  }

  mount () {
    return Promise.resolve(this.element)
  }

  remove () {
    f.frame(() =>
      this.element.remove()
    )()
    return this
  }

  replace (text) {
    f.frame(async () =>
      this.element.parentNode.replaceChild(await text.mount(), this.element)
    )()
    return this
  }

  update (text) {
    f.frame(() =>
      f.different(this, text) && (
        (this.#content = text.content),
        (this.element.textContent = this.content)
      )
    )()
    return this
  }

  [f.dunder.different] () {
    return this.content
  }

  static create () {
    return lazy(Text, ...arguments)
  }

  static is (target) {
    return f.or(
      f.isNil(target),
      f.some([String, Number, Boolean, Date, Array], f.is(f.__, target))
    )
  }
}

export default Text
