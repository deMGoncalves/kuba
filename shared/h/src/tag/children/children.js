import * as f from '@kuba/f'
import mapper from './mapper'
import reflow from './reflow'
import paint from './paint'

class Children {
  #list
  #parent

  get list () {
    return this.#list
  }

  constructor (list, parent) {
    this.#list = list
    this.#parent = parent
  }

  append (child) {
    f.push(this.list, child)
    this.#parent.append(paint(child))
    return this
  }

  paint () {
    f.forEach(this.list, (child) =>
      this.#parent.append(paint(child)))
    return this
  }

  replace (current, child) {
    f.replace(this.list, current, child)
    this.#parent.replaceChild(current.element, paint(child))
    return this
  }

  reflow (child) {
    reflow(this, child)
    return this
  }

  remove (current) {
    f.remove(this.list, current)
    current.remove()
    return this
  }

  static create (list, parent) {
    return new Children(mapper(list), parent)
  }
}

export default Children
