import * as f from '@kuba/f'
import { didUpdate, paint, repaint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import action from './action'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'
import scroll from './scroll'

@paint(component)
@jsonld(data)
@action
class Search {
  #opened

  get action () {
    return urlFor('search')
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get placeholder () {
    return 'O que você está procurando?'
  }

  @repaint
  @scroll.unlock
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  @scroll.lock
  open () {
    this.#opened = f.T()
    return this
  }

  @didUpdate
  [f.dunder.update] () {
    this.opened && (
      f.first(this[f.dunder.tag].children.list).element.querySelector('input').focus()
    )
    return this
  }
}

export default Search
