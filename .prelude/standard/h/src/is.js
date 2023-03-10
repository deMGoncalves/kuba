class Is {
  #value

  get value () {
    return this.#value
  }

  constructor (value) {
    this.#value = value
  }

  static create (attrList) {
    const [, value] = attrList.find?.(Is.#is) ?? []
    return new Is(value)
  }

  static #is ([key, value]) {
    return /^(?<attr>is)$/.test(key) && value !== undefined
  }
}

export default Is
