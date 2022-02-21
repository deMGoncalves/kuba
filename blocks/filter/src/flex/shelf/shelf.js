import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import props from '@kuba/props'
import component from './component'
import Flex from './flex'
import schema from './schema.json'

@paint(component)
@props
class Shelf {
  #flexies

  get flexies () {
    return this.#flexies ??= f.map(schema, Flex.create(this))
  }

  [Flex.onChange] () {
    echo.emit('filter:change', {
      key: 'flex',
      value: f
        .from(this.flexies)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Shelf
