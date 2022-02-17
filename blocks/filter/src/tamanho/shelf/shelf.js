import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import component from './component'
import Tamanho from './tamanho'
import schema from './schema.json'

@paint(component)
class Shelf {
  #tamanhos

  get tamanhos () {
    return this.#tamanhos ??= f.map(schema, Tamanho.create(this))
  }

  [Tamanho.onChange] () {
    echo.emit('filter:change', {
      key: 'tamanho',
      value: f
        .from(this.tamanhos)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Shelf
