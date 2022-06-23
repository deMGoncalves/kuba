import * as f from '@kuba/f'
import { lazy } from '@kuba/h'
import mapper from './mapper'
import reflow from './reflow'

class Children {
  #list
  #parent

  constructor (children, parent) {
    this.#list = mapper(children)
    this.#parent = parent
  }

  append (child) {
    this.#parent.appendChild(child)
    f.push(this, child)
    return this
  }

  async mount () {
    await this.#parent.append(this)
    return this
  }

  replace (child, newChild) {
    child.replace(newChild)
    f.replace(this, child, newChild)
    return this
  }

  unmount () {
    f.forEach(this, this.remove.bind(this))
    return this
  }

  async update (newChildren) {
    await reflow(this, newChildren)
    return this
  }

  remove (child) {
    child.remove()
    f.remove(this, child)
    return this
  }

  [f.dunder.first] () {
    return f.first(this.#list)
  }

  [f.dunder.forEach] () {
    return this.#list
  }

  [f.dunder.last] () {
    return f.last(this.#list)
  }

  [f.dunder.map] () {
    return this.#list
  }

  [f.dunder.push] () {
    return this.#list
  }

  [f.dunder.remove] () {
    return this.#list
  }

  [f.dunder.replace] () {
    return this.#list
  }

  [f.dunder.toArray] () {
    return this.#list
  }

  static create () {
    return lazy(Children, ...arguments)
  }
}

export default Children
