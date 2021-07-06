import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Breadcrumb {
  #className

  get className () {
    return this.#className
  }

  constructor (props) {
    this.#className = props.className
  }
}

export default Breadcrumb
