import { paint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'

@paint(component)
class Path {
  #index
  #page
  #params
  #title

  get href () {
    return urlFor(this.#page, this.#params)
  }

  get index () {
    return (this.#index ??= 0)
  }

  get title () {
    return (this.#title ??= '')
  }

  constructor (index, page, params, title) {
    this.#index = index
    this.#page = page
    this.#params = params
    this.#title = title
  }

  static create (data, index) {
    return new Path(
      index,
      data.page,
      data.params,
      data.title
    )
  }
}

export default Path
