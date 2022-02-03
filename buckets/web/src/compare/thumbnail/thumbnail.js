import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Thumbnail {
  get master () {
    return Shape.master?.thumbnail
  }

  get slave () {
    return Shape.slave?.thumbnail
  }
}

export default Thumbnail
