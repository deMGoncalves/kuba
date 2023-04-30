import Instance from './instance'
import magic from '@kuba/magic'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'
import Text from './text'

class Children {
  #childList
  #parent

  constructor (childList, parent) {
    this.#childList = childList
    this.#parent = parent
  }

  [reflow.add] (nChild) {
    this.#parent.appendChild(nChild)
    this.#childList.push(nChild)
    return this
  }

  [reflow.remove] (child) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1)
    child.remove()
    return this
  }

  [reflow.replace] (child, nChild) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1, nChild)
    this.#parent.replace(child, nChild)
    return this
  }

  [render.flow] () {
    this.#parent.append(this.#childList)
    return this
  }

  [repaint.reflow] (nChildren) {
    reflow(this, nChildren)
    return this
  }

  [magic.zip] () {
    return this.#childList
  }

  * [Symbol.iterator] () {
    yield * this.#childList
  }

  static create (childList, parent) {
    childList = childList.filter(Boolean)
    childList = Text.mapper(childList)
    childList = Instance.mapper(childList)
    return new Children(childList, parent)
  }
}

export default Children
