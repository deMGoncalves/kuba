import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import schema from './schema.json'
import scroll from '@kuba/scroll'
import Select, { component, Option } from '../select'

@paint(component)
class Montagem extends Select {
  #options

  get descricao () {
    return 'Escolha a maneira como o truck é anexado ao shape'
  }

  get key () {
    return 'montagem'
  }

  get nome () {
    return 'Montagem'
  }

  get options () {
    return this.#options ??= f.map(schema, Option.create(this))
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

export default Montagem
