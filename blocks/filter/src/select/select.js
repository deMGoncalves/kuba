import * as f from '@kuba/f'
import echo from '@kuba/echo'

class Select {
  #len
  #opened

  get descricao () {
    return ''
  }

  get len () {
    return f
      .from(this.options)
      .pipe(f.filter(f.__, f.prop('selected')))
      .pipe(f.len)
      .done()
  }

  get nome () {
    return ''
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get options () {
    return []
  }

  close () {
    this.#opened = f.F()
    return this
  }

  open () {
    this.#opened = f.T()
    return this
  }

  [f.dunder.onChange] (key) {
    echo.emit('filter:change', {
      key,
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
