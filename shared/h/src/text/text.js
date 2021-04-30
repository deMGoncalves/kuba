import * as f from '@kuba/f'
import paint from './paint'
import repaint from './repaint'

@paint
class Text {
  #content
  #id

  get content () {
    return this.#content
  }

  get id () {
    return this.#id
  }

  get name () {
    return '#text'
  }

  get type () {
    return 3
  }

  get [f.magic('isNode')] () {
    return f.T()
  }

  constructor (content) {
    this.#content = content
    this.#id = Symbol(this.name)
  }

  @repaint
  changeContent (content) {
    this.#content = content
    return this
  }

  reflow (other) {
    f.different(this.content, other.content) && (
      this.changeContent(other.content)
    )
    return this
  }

  static create (content) {
    return new Text(content)
  }

  static is (textOrTag) {
    return f.some([String, Number], f.is(f.__, textOrTag))
  }
}

export default Text
