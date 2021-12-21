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

  // TODO: para que eh usado este medoto
  different (text) {
    return f.different(this.content, text.content)
  }

  paint () {
    return this.element
  }

  reflow (text) {
    this.different(text) && this.repaint(text)
    return this
  }

  remove () {
    this.element.remove()
    return this
  }

  repaint (text) {
    this.#content = text.content
    this.element.textContent = this.content
    return this
  }

  static create (content) {
    return new Text(content)
  }

  static is (target) {
    return f.or(
      f.isNil(target),
      f.some([String, Number, Date], f.is(f.__, target))
    )
  }
}

export default Text
