import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import jsonld from '@kuba/jsonld'
import { urlFor } from '@kuba/router'
import component from './component'
import data from './data'
import resize from './resize'
import schema from './schema.json'

@paint(component)
@jsonld(data)
@resize
class Search {
  #opened

  get action () {
    return urlFor('search')
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get placeholder () {
    return schema.placeholder
  }

  @repaint
  close () {
    this.#opened = f.F()
    echo.emit('overlayer:close')
    return this
  }

  @repaint
  open () {
    this.#opened = f.T()
    echo.emit('overlayer:open')
    return this
  }
}

export default Search
