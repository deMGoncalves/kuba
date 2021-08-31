import { paint } from '@kuba/h'
import change from './change'
import component from './component'
import Ordenation from './ordenation'
import Region from './region'
import Tags from './tags'

@paint(component)
class Filter {
  #refining
  #selects

  get refining () {
    return this.#refining ??= {}
  }

  get selects () {
    return this.#selects ??= [
      Ordenation.create(this),
      Region.create(this),
      Tags.create(this)
    ]
  }

  @change
  refine (select) {
    this.refining[select.key] = select.value
    return this
  }
}

export default Filter
