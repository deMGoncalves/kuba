import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'
import schema from './schema.json'

@paint(component)
@jsonld(data)
class Search {
  #className
  #slot

  get action () {
    return `${__settings.app.url}/busca`
  }

  get className () {
    return this.#className
  }

  get placeholder () {
    return schema.placeholder
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
  }
}

export default Search
