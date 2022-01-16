import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import global from '@kuba/global'
import Card from '@kuba/card'
import component from './component'

@paint(component)
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(global.shapes, Card.create)
  }
}

export default Shelf
