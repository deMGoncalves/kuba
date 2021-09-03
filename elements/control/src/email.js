import { paint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Email {
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
}

export default Email
