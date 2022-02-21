import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import props from '@kuba/props'
import component from './component'
import Tipo from './tipo'
import schema from './schema.json'

@paint(component)
@props
class Shelf {
  #tipos

  get tipos () {
    return this.#tipos ??= f.map(schema, Tipo.create(this))
  }

  [Tipo.onChange] () {
    echo.emit('filter:change', {
      key: 'tipo',
      value: f
        .from(this.tipos)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Shelf
