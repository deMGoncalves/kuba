import { eager } from '@kuba/h'
import * as f from '@kuba/f'
import mapper from './mapper'
import reflow from './reflow'

class Children {
  #list
  #parent

  get last () {
    return f.last(this.list)
  }

  get list () {
    return this.#list
  }

  constructor (children, parent) {
    this.#list = mapper(children)
    this.#parent = parent
  }

  append (vTag) {
    this.#parent.appendChild(vTag)
    f.push(this.list, vTag)
    return this
  }

  drop () {
    f.forEach(this.list, this.remove.bind(this))
    return this
  }

  paint () {
    this.#parent.append(...this.list)
    return this
  }

  replace (tag, vTag) {
    tag.replace(vTag)
    f.replace(this.list, tag, vTag)
    return this
  }

  reflow (vChildren) {
    reflow(this, vChildren)
    return this
  }

  remove (tag) {
    tag.remove()
    f.remove(this.list, tag)
    return this
  }

  static create (...args) {
    return eager(Children, ...args)
  }
}

export default Children
