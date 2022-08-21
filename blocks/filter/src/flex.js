import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import schema from './schema.json'
import scroll from '@kuba/scroll'
import Select, { component, Option } from './select'

@paint(component)
class Flex extends Select {
  #options

  get descricao () {
    return 'Qual nível de flexibilidade você prefere?'
  }

  get key () {
    return 'flex'
  }

  get nome () {
    return 'Flex'
  }

  get options () {
    return this.#options ??= f.map(schema.flex, Option.create(this))
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

export default Flex
