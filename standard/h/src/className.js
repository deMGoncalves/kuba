import render from './render'
import repaint from './repaint'

class ClassName {
  #target
  #value

  get key () {
    return 'class'
  }

  get value () {
    return this.#value.trim()
  }

  constructor (className, target) {
    this.#value = className
    this.#target = target
  }

  [render.flow] () {
    this.value && this.#target.setAttribute(this)
    return this
  }

  /**
   * TODO: Temos uma oportunidade de melhoria neste ponto, este
   * contrato esta com muita responsabilidade
   */
  [repaint.reflow] (nClassName) {
    (this.value !== nClassName.value) && (
      this.#value = nClassName.value,
      this.value
        ? this.#target.setAttribute(this)
        : this.#target.removeAttribute()
    )
    return this
  }

  * [Symbol.iterator] () {
    yield this.key
    yield this.value
  }

  static create (attrList, target) {
    const [, value] = attrList.find(ClassName.#is) ?? []
    const className = [].concat(value).flat(Infinity).join(' ')
    return new ClassName(className, target)
  }

  static #is ([key, value]) {
    return /^(?<attr>className)$/.test(key) && value !== undefined
  }
}

export default ClassName
