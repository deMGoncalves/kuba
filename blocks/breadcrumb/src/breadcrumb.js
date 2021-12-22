import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import props from '@kuba/props'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@props
class Breadcrumb {
  #paths

  get paths () {
    return this.#paths ??= []
  }

  constructor (props) {
    this.#paths = props.paths
  }
}

export default Breadcrumb
