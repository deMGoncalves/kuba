import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Shelf {
  get image () {
    return global.thumbnail
  }
}

export default Shelf
