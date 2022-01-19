import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import Path from './path'

@paint(component)
class Breadcrumb {
  #paths

  get paths () {
    return this.#paths
  }

  constructor (paths) {
    this.#paths = paths
  }

  static create (paths) {
    return new Breadcrumb(f.map(paths, Path.stub))
  }
}

export default Breadcrumb
