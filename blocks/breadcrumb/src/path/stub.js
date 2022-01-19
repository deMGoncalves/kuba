import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Path {
  #index
  #page
  #params
  #title

  get index () {
    return this.#index ??= ''
  }

  get page () {
    return this.#page ??= ''
  }

  get params () {
    return this.params ??= {}
  }

  get title () {
    return this.#title ??= ''
  }

  redirect () {
    return this
  }

  static create () {
    return new Path()
  }
}

export default Path
