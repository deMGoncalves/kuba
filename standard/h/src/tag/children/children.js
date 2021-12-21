import * as f from '@kuba/f'
import mapper from './mapper'
import paint from './paint'
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

  constructor (list, parent) {
    this.#list = list
    this.#parent = parent
  }

  append (child) {
    this.#parent.appendChild(paint(child))
    f.push(this.list, child)
    return this
  }

  drop () {
    f.forEach(this.list, child => this.remove(child))
    return this
  }

  paint () {
    this.#parent.append(...f.map(this.list, paint))
    return this
  }

  replace (current, child) {
    current.replace(child)
    f.replace(this.list, current, child)
    return this
  }

  reflow (child) {
    reflow(this, child)
    return this
  }

  remove (current) {
    current.remove()
    f.remove(this.list, current)
    return this
  }

  static create (list, parent) {
    return new Children(mapper(list), parent)
  }
}

export default Children
