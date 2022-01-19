import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'
import Stub from './stub'

@paint(component)
@jsonld(data)
class Path {
  #index
  #page
  #params
  #title

  get index () {
    return this.#index
  }

  get page () {
    return this.#page
  }

  get params () {
    return this.#params
  }

  get title () {
    return this.#title
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

  static stub () {
    return new Stub()
  }
}

export default Path
