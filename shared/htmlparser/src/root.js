import * as f from '@kuba/f'

class Root {
  #tagName

  constructor (tagName) {
    this.#tagName = tagName
  }

  append (...children) {
    self.postMessage({
      action: 'render',
      payload: {
        children: f.map(children, child => child.paint()),
        element: this.#tagName
      }
    })
    return this
  }

  static create (tagName) {
    return new Root(tagName)
  }
}

export default Root
