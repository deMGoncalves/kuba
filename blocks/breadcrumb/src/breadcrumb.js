import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Breadcrumb {
  #className
  #paths

  get className () {
    return this.#className
  }

  get paths () {
    return this.#paths ??= []
  }

  constructor (props) {
    this.#className = props.className
    this.#paths = props.paths
  }
}

export default Breadcrumb
