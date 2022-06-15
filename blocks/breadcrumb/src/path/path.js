import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { paint } from '@kuba/h'
import { redirectTo, urlFor } from '@kuba/router'
import component from './component'
import data from './data'
import event from './event'
import jsonld from '@kuba/jsonld'
import Stub from './stub'

@paint(component)
@jsonld(data)
class Path {
  #index
  #page
  #params
  #title

  get href () {
    return f.add(settings.app.url, urlFor(this.#page, this.#params))
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

  @event.redirect
  redirect () {
    redirectTo(this.page, this.#params)
    return this
  }

  [component.showPrefix] () {
    return f.isTruthy(this.#index)
  }

  [data.index] () {
    return f.inc(this.#index)
  }

  static create (data, index) {
    return new Path(
      index,
      data.page,
      data.params,
      data.title
    )
  }

  static stub (data, index) {
    return new Stub(data, index)
  }
}

export default Path
