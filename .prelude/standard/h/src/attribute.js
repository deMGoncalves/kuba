import reflow from './reflow'

class Attribute {
  #key
  #value

  get key () {
    return this.#key
  }

  get value () {
    return this.#value
  }

  constructor (key, value) {
    this.#key = key
    this.#value = value
  }

  [reflow.different] (nAttr) {
    return (
      this.key !== nAttr.key ||
      this.value !== nAttr.value
    )
  }

  * [Symbol.iterator] () {
    yield this.key
    yield this.value
  }

  static #create (attr) {
    return new Attribute(...attr)
  }

  static #is ([key, value]) {
    return !/^(?<attrs>className|is|on[A-Z].+)$/.test(key) && Boolean(value)
  }

  static mapper (attrList) {
    return attrList
      .filter(Attribute.#is)
      .map(Attribute.#create)
  }
}

export default Attribute
