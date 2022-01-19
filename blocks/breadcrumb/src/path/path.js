import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { redirectTo, urlFor } from '@kuba/router'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'
import event from './event'
import Stub from './stub'

@paint(component)
@jsonld(data)
class Path {
  #index
  #page
  #params
  #title

  get href () {
    return f.add(settings.app.url, urlFor(this.page, this.params))
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

  @event.redirect
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
