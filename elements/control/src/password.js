import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import component from './component'
import props from '@kuba/props'

@paint(component)
@props
class Password {
  #id

  get id () {
    return this.#id ??= f.guid()
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
