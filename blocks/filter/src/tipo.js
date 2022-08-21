import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import schema from './schema.json'
import scroll from '@kuba/scroll'
import Select, { component, Option } from './select'

@paint(component)
class Tipo extends Select {
  #options

  get descricao () {
    return 'Que tipo de shape é você quer?'
  }

  get key () {
    return 'tipo'
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
    super[Option.onChange]()
    return this
  }
}

export default Tipo
