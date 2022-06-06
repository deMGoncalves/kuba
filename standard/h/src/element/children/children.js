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
    f.push(this.#list, child)
    return this
  }

  async mount () {
    await this.#parent.append(this.#list)
    return this
  }

  replace (child, newChild) {
    child.replace(newChild)
    f.replace(this.#list, child, newChild)
    return this
  }

  unmount () {
    f.forEach(this, this.remove.bind(this))
    return this
  }

  async update (children) {
    await reflow(this, children)
    return this
  }

  remove (child) {
    child.remove()
    f.remove(this.#list, child)
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

  [f.dunder.toArray] () {
    return this.#list
  }

  static create () {
    return lazy(Children, ...arguments)
  }
}

export default Children
