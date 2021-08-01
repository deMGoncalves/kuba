import * as f from '@kuba/f'

class Root {
  #tagName

  constructor (tagName) {
    this.#tagName = tagName
  }

  append (...children) {
    self.postMessage({
      tagName: this.#tagName,
      children: f.map(children, child => child.paint())
    })
    return this
  }

  static create (tagName) {
    return new Root(tagName)
  }
}

export default Root
