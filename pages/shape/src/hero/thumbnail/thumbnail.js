import { paint, repaint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'
import effect from './effect'

@paint(component)
@effect
class Thumbnail {
  #alt
  #src

  get alt () {
    return this.#alt
  }

  get src () {
    return `https://ik.imagekit.io/deMGoncalves/${this.#src}?tr=w-337.033,h-421.283`
  }

  zoom () {
    echo.emit('zoom:open', { src: this.#src, alt: this.alt })
    return this
  }

  @repaint
  [effect.onChange] (alt, src) {
    this.#alt = alt
    this.#src = src
    return this
  }
}

export default Thumbnail
