import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import component from './component'

@paint(component)
class History {
  #values

  get has () {
    return f.truthy(f.len(this.values))
  }

  get values () {
    return this.#values ??= JSON.parse(f.or(localStorage.getItem('search'), '[]'))
  }

  select (value) {
    location.assign(`${urlFor('search')}?q=${value}`)
    return this
  }
}

export default History
