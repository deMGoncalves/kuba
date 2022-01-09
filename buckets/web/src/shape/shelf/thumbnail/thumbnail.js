import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Thumbnail {
  get image () {
    return global.thumbnail
  }
}

export default Thumbnail
