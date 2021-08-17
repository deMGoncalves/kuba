import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Name {
  #className

  get className () {
    return this.#className
  }

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

  constructor (props) {
    this.#className = props.className
  }
}

export default Name
