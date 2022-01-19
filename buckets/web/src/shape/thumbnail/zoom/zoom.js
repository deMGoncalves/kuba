import { paint } from '@start/h'
import component from './component'

@paint(component)
class Zoom {
  #message

  get message () {
    return this.#message ??= 'Clique aqui para ver essa imagem de perto'
  }

  static create () {
    return new Zoom()
  }
}

export default Zoom
