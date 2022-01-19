import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class NoRelated {
  #message

  get message () {
    return this.#message ??= 'Não encontramos nada no momento :/'
  }

  static create () {
    return new NoRelated()
  }
}
export default NoRelated
