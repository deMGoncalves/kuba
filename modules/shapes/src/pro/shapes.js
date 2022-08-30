import * as f from '@kuba/f'
import { actions, data, storage, merge } from '../home'
import { didMount, paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import { setGlobal } from '@kuba/global'
import component from './component'
import i18n from './i18n'
import jsonld from '@kuba/jsonld'

@paint(component)
@jsonld(data)
@storage
@actions
class Shapes {
  #filter = { pro: true }
  #page = 1

  get description () {
    return i18n.description
  }

  get title () {
    return i18n.title
  }

  @storage.pull
  [actions.onMore] () {
    this.#page = f.inc(this.#page)
    return this
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }

  [f.dunder.page] () {
    return this.#page ?? 1
  }

  [storage.filter] () {
    return this.#filter ?? {}
  }

  [storage.onError] () {
    return this
  }

  [storage.onResponse] (shapes) {
    setGlobal({
      page: this.#page,
      shapes: merge(shapes, this)
    })
    return this
  }
}

export default Shapes
