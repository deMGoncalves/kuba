import * as f from '@kuba/f'

class Contents {
  #text = []

  get text () {
    return this.#text
  }

  push (value) {
    f.push(this.#text, value)
    return this
  }

  rewind () {
    f.splice(this.#text, 0, Infinity)
    return this
  }
}

export default new Contents()
