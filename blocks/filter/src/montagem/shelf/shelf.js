import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import props from '@kuba/props'
import component from './component'
import Montagem from './montagem'
import schema from './schema.json'

@paint(component)
@props
class Shelf {
  #montagens

  get montagens () {
    return this.#montagens ??= f.map(schema, Montagem.create(this))
  }

  [Montagem.onChange] () {
    echo.emit('filter:change', {
      key: 'montagem',
      value: f
        .from(this.montagens)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Shelf
