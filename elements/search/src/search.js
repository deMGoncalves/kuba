import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'

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
    return 'busque por tedências, segmentos ou marca...'
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
