import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import component from './component'
import Ordenation from './ordenation'
import Region from './region'
import Tags from './tags'

@paint(component)
class Filter {
  #selects
  #refining = {}

  get selects () {
    return this.#selects ??= [
      Ordenation.create(this),
      Region.create(this),
      Tags.create(this)
    ]
  }

  refine (select) {
    this.#refining[select.key] = select.value
    echo.emit('filter:change', { ...this.#refining })
    return this
  }
}

export default Filter
