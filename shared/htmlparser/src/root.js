import * as f from '@kuba/f'

class Root {
  #name

  constructor (name) {
    this.#name = name
  }

  append (...children) {
    self.postMessage({
      action: 'render',
      payload: {
        children: f.map(children, child => child.paint()),
        element: this.#name
      }
    })
    return this
  }

  static create (name) {
    return new Root(name)
  }
}

export default Root
