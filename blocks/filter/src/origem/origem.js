import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import i18n from './i18n'
import Option from './option'
import schema from './schema.json'
import scroll from '@kuba/scroll'
import Select, { component } from '@kuba/filter/src/select'

@paint(component)
class Origem extends Select {
  #options

  get descricao () {
    return i18n.descricao
  }

  get nome () {
    return i18n.nome
  }

  get options () {
    return this.#options ??= f.map(schema.origem, Option.create(this))
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

  [Select.key] () {
    return 'origem'
  }
}

export default Origem
