import * as f from '@kuba/f'

class Tag {
  #attributes = {}
  #children = []
  #is
  #tagName

  constructor (tagName, is) {
    this.#is = is
    this.#tagName = tagName
  }

  append (...children) {
    f.push(this.#children, ...children)
    return this
  }

  paint () {
    return {
      attributes: this.#attributes,
      children: f.map(this.#children, child => child.paint()),
      is: this.#is,
      tagName: this.#tagName,
      type: 1
    }
  }

  removeAttribute (key) {
    delete this.#attributes[key]
    return this
  }

  setAttribute (key, value) {
    this.attributes[key] = value
    return this
  }

  static create (tagName, { is }) {
    return new Tag(tagName, is)
  }
}

export default Tag
