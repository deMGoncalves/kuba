import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Thumbnail {
  get master () {
    return `https://ik.imagekit.io/deMGoncalves/${Shape.master?.thumbnail}?tr=w-457.5,h-571.867`
  }

  get slave () {
    return `https://ik.imagekit.io/deMGoncalves/${Shape.slave?.thumbnail}?tr=w-457.5,h-571.867`
  }
}

export default Thumbnail
