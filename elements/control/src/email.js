import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Email {
  #className

  get className () {
    return this.#className
  }

  get id () {
    return 'email'
  }

  get label () {
    return 'Email'
  }

  get name () {
    return 'email'
  }

  get type () {
    return 'email'
  }

  constructor (props) {
    this.#className = props.className
  }
}

export default Email
