import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import { redirectTo } from '@kuba/router'
import actions from './actions'
import component from './component'
import data from './data'
import merge from './merge'
import storage from './storage'

@paint(component)
@jsonld(data)
@storage
@actions
class Shapes {
  #filter
  #page

  get description () {
    return 'Seja bem vindo! Escolha o melhor shape para o seu setup'
  }

  get filter () {
    return this.#filter ??= {}
  }

  get page () {
    return this.#page ??= 1
  }

  get title () {
    return 'Kuba'
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }

  @storage.pull
  [actions.onFilter] (key, value) {
    this.#page = 1
    this.#filter = f.assign(this.filter, { [key]: value })
    return this
  }

  @storage.pull
  [actions.onMore] () {
    this.#page = f.inc(this.page)
    return this
  }

  [storage.onError] () {
    redirectTo('shapes')
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
