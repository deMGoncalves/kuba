import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import { redirectTo, urlFor } from '@kuba/router'
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

  get href () {
    return urlFor(this.page, this.params)
  }

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

  redirect () {
    redirectTo(this.page, this.params)
    return this
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
