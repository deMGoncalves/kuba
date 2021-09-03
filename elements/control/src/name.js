import { paint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Name {
  get id () {
    return 'name'
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
