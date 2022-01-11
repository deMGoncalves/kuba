import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Descricao {
  #nome
  #descricao
  get descricao () {
    return this.#descricao ??= ''
  }

  get nome () {
    return this.#nome ??= ''
  }

  constructor (nome, descricao) {
    this.#nome = nome
    this.#descricao = descricao
  }

  static create (props) {
    return new Descricao(
      props?.nome,
      props?.descricao
    )
  }
}

export default Descricao
