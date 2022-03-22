import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import component from './component'
import props from '@kuba/props'

@paint(component)
@props
class Email {
  #id

  get id () {
    return this.#id ??= f.guid()
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
}

export default Email
