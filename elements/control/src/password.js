import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Password {
  #className

  get className () {
    return this.#className
  }

  get id () {
    return 'id'
  }

  get label () {
    return 'Password'
  }

  get name () {
    return 'password'
  }

  get type () {
    return 'password'
  }

  constructor (props) {
    this.#className = props.className
  }
}

export default Password
