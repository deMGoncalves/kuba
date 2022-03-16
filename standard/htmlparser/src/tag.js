import * as f from '@kuba/f'

class Tag {
  #attributes = {}
  #children = []
  #name

  constructor (name, is) {
    this.#attributes = { is }
    this.#name = name
  }

  append (...children) {
    f.push(this.#children, ...children)
    return this
  }

  paint () {
    return {
      children: f.map(this.#children, child => child.paint()),
      name: this.#name,
      props: this.#attributes,
      type: 1
    }
  }

  static create (name, { is }) {
    return new Tag(name, is)
  }
}

export default Tag
