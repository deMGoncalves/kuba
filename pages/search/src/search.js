import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'
import history from './history'

@paint(component)
@jsonld(data)
@markup
class Search {
  #q

  get description () {
    return settings.app.description
  }

  get q () {
    return f.or(this.#q, 'Search')
  }

  get title () {
    return 'Search'
  }

  constructor (props) {
    this.#q = props.q
    history(props.q)
  }
}

export default Search
