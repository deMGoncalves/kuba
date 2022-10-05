import * as f from '@kuba/f'
import { filter } from '@kuba/marionette'
import echo from '@kuba/echo'
import Option from './option'
import component from './component'

class Select {
  #opened

  get descricao () {
    return ''
  }

  get nome () {
    return ''
  }

  get options () {
    return []
  }

  static get key () {
    return f.dunder.key
  }

  close () {
    this.#opened = f.F()
    return this
  }

  open () {
    this.#opened = f.T()
    return this
  }

  [component.len] () {
    return f
      .from(this.options)
      .pipe(f.filter(f.__, f.prop('selected')))
      .pipe(f.len)
      .done()
  }

  [component.opened] () {
    return this.#opened ??= f.F()
  }

  @filter.isTruthy
  [component.selected] () {
    return f
      .from(this.options)
      .pipe(f.some(f.__, f.prop('selected')))
      .done()
  }

  [Option.onChange] () {
    echo.emit('filter:change', {
      key: f.dunder('key', this),
      value: f
        .from(this.options)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Select
