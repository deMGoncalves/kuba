import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Descricao {
  #nome
  #descricao
  #opened
  get descricao () {
    return this.#descricao ??= ''
  }

  get nome () {
    return this.#nome ??= ''
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  constructor (nome, descricao) {
    this.#nome = nome
    this.#descricao = descricao
  }

  @repaint
  open () {
    this.#opened = f.not(this.opened)
    return this
  }

  static create (props) {
    return new Descricao(
      props?.nome,
      props?.descricao
    )
  }
}

export default Descricao
