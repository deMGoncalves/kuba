import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import component from './component'
import props from '@kuba/props'

@paint(component)
@props
class Name {
  #id

  get id () {
    return this.#id ??= f.guid()
  }

  get label () {
    return 'Nome completo'
  }

  get name () {
    return 'name'
  }

  get type () {
    return 'text'
  }
}

export default Name
