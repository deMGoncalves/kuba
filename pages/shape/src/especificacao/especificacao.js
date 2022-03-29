import * as f from '@kuba/f'
import effect from './effect'
import setData from './setData'

class Especificacao {
  #pristine
  #valor

  get descricao () {
    return ''
  }

  get nome () {
    return ''
  }

  get pristine () {
    return this.#pristine ??= f.T()
  }

  get valor () {
    return this.#valor ??= ''
  }

  [effect.onChange] (valor) {
    this.#pristine = f.F()
    this.#valor = valor
    setData(this)
    return this
  }
}

export default Especificacao
