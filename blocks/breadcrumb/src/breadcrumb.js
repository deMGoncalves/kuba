import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'
import Path from './path'

@paint(component)
@jsonld(data)
class Breadcrumb {
  #paths

  get paths () {
    return this.#paths ??= []
  }

  constructor (paths) {
    this.#paths = paths
  }

  static create (paths) {
    return new Breadcrumb(f.map(paths, Path.create))
  }
}

export default Breadcrumb
