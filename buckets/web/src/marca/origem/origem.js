import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Origem {
  #local
  get local () {
    return this.#local ??= ''
  }

  constructor (origem) {
    this.#local = origem
  }

  static create (props) {
    return new Origem(props?.origem?.valor)
  }
}

export default Origem
