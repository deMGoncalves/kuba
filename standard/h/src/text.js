import * as f from '@kuba/f'

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

  [f.dunder.different] () {
    return this.content
  }

  [f.dunder.forEach] () {
    return [this]
  }

  static create (content) {
    return new Text(content)
  }

  static is (target) {
    return f.or(
      f.isNil(target),
      f.some([String, Number, Date, Array], f.is(f.__, target))
    )
  }
}

export default Text
