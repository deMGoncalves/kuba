import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import schema from './schema.json'
import scroll from '@kuba/scroll'
import Select, { component, Option } from './select'

@paint(component)
class Material extends Select {
  #options

  get descricao () {
    return 'Escolha o melhor material para seu shape'
  }

  get key () {
    return 'material'
  }

  get nome () {
    return 'Material'
  }

  get options () {
    return this.#options ??= f.map(schema.material, Option.create(this))
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

export default Material
