import * as f from '@kuba/f'
import eager from './eager'

class Text {
  #content
  #element

  get content () {
    return this.#content ?? ''
  }

  get element () {
    return this.#element ??= document.createTextNode(this.content)
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

  paint () {
    return this.element
  }

  reflow (vText) {
    f.different(this, vText) && this.repaint(vText)
    return this
  }

  remove () {
    this.element.remove()
    return this
  }

  repaint (vText) {
    this.#content = vText.content
    this.element.textContent = this.content
    return this
  }

  replace (vTag) {
    this.element.parentNode.replaceChild(vTag.paint(), this.element)
    return this
  }

  [f.dunder.different] () {
    return this.content
  }

  [f.dunder.forEach] () {
    return [this]
  }

  static create (...args) {
    return eager(Text, ...args)
  }

  static is (target) {
    return f.or(
      f.isNil(target),
      f.some([String, Number, Boolean, Date, Array], f.is(f.__, target))
    )
  }
}

export default Text
