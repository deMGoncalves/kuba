import Attribute from './attribute'
import magic from '@kuba/magic'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'

class Attributes {
  #attrList
  #target

  constructor (attrList, target) {
    this.#attrList = attrList
    this.#target = target
  }

  [reflow.add] (nAttr) {
    this.#attrList.push(nAttr)
    this.#target.setAttribute(nAttr)
    return this
  }

  [reflow.remove] (attr) {
    const start = this.#attrList.indexOf(attr)
    this.#attrList.splice(start, 1)
    this.#target.removeAttribute(attr)
    return this
  }

  [reflow.replace] (attr, nAttr) {
    const start = this.#attrList.indexOf(attr)
    this.#attrList.splice(start, 1, nAttr)
    this.#target.removeAttribute(attr)
    this.#target.setAttribute(nAttr)
    return this
  }

  [render.flow] () {
    this.#attrList.forEach((attr) => this.#target.setAttribute(attr))
    return this
  }

  [repaint.reflow] (nAttributes) {
    reflow(this, nAttributes)
    return this
  }

  [magic.zip] () {
    return this.#attrList
  }

  * [Symbol.iterator] () {
    yield * this.#attrList
  }

  static create (attrList, target) {
    attrList = Attribute.mapper(attrList)
    return new Attributes(attrList, target)
  }
}

export default Attributes
