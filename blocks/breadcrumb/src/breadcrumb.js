import { paint } from '@kuba/h'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'

@paint(component)
@jsonld(data)
class Breadcrumb {
  #paths

  get paths () {
    return this.#paths ??= []
  }
}

export default Breadcrumb
