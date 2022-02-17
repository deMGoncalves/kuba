import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import props from '@kuba/props'
import component from './component'
import Material from './material'
import schema from './schema.json'

@paint(component)
@props
class Shelf {
  #materiais

  get materiais () {
    return this.#materiais ??= f.map(schema, Material.create(this))
  }

  [Material.onChange] () {
    echo.emit('filter:change', {
      key: 'material',
      value: f
        .from(this.materiais)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Shelf
