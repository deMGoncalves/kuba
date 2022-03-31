import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import Option from './option'
import schema from './schema.json'
import Select, { component, scroll } from '@kuba/filter/src/select'

@paint(component)
class Tamanho extends Select {
  #options

  get descricao () {
    return 'Qual tamanho de shape você prefere?'
  }

  get key () {
    return 'tamanho'
  }

  get nome () {
    return 'Tamanho'
  }

  get options () {
    return this.#options ??= f.map(schema.tamanho, Option.create(this))
  }

  @repaint
  @scroll.unlock
  close () {
    super.close()
    return this
  }

  @repaint
  @scroll.lock
  open () {
    super.open()
    return this
  }

  @repaint
  [Option.onChange] () {
    super[Option.onChange]()
    return this
  }
}

export default Tamanho
