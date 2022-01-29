import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Thumbnail {
  get master () {
    return f.first(Compare.shelf).thumbnail
  }

  get slave () {
    return f.last(Compare.shelf).thumbnail
  }
}

export default Thumbnail
