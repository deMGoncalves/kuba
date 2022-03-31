import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import schema from './schema.json'
import Select, { component, Option, scroll } from './select'

@paint(component)
class Tipo extends Select {
  #options

  get descricao () {
    return 'Que tipo de shape é você quer?'
  }

  get nome () {
    return 'Tipo'
  }

  get options () {
    return this.#options ??= f.map(schema.tipo, Option.create(this))
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
    super[Option.onChange]('tipo')
    return this
  }
}

export default Tipo
