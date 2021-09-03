import { paint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Password {
  get id () {
    return 'id'
  }

  get label () {
    return 'Senha'
  }

  get name () {
    return 'password'
  }

  get type () {
    return 'password'
  }
}

export default Password
