import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Path {
  #href
  #index
  #title

  get href () {
    return (this.#href ??= '#')
  }

  get index () {
    return (this.#index ??= 0)
  }

  get title () {
    return (this.#title ??= '')
  }

  constructor (title, href, index) {
    this.#href = href
    this.#index = index
    this.#title = title
  }

  static create (data, index) {
    return new Path(
      data.title,
      data.href,
      index
    )
  }
}

export default Path
