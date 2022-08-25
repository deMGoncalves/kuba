import * as f from '@kuba/f'
import { didMount, paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import { setGlobal } from '@kuba/global'
import actions from './actions'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'
import merge from './merge'
import storage from './storage'

@paint(component)
@jsonld(data)
@storage
@actions
class Shapes {
  #filter
  #page

  get filter () {
    return this.#filter ??= { pro: true }
  }

  get page () {
    return this.#page ??= 1
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }

  @storage.pull
  [actions.onMore] () {
    this.#page = f.inc(this.page)
    return this
  }

  [storage.onError] () {
    return this
  }

  [storage.onResponse] (shapes) {
    setGlobal({
      page: this.page,
      shapes: merge(shapes, this)
    })
    return this
  }
}

export default Shapes
