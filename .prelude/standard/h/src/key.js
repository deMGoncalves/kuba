class Key {
  #value

  get value () {
    return this.#value
  }

  constructor (value) {
    this.#value = value
  }

  static create (attrList) {
    const [, value] = attrList.find?.(Key.#is) ?? []
    return new Key(value)
  }

  static #is ([key, value]) {
    return /^(?<attr>key)$/.test(key) && value !== undefined
  }
}

export default Key
