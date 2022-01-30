import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { urlFor } from '@kuba/router'
import action from './action'
import component from './component'
import data from './data'
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
    return 'Procure pelo melhor shape...'
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
}

export default Search
