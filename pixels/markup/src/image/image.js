import { paint, repaint } from '@kuba/h'
import * as settings from '@kuba/settings'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Image {
  #content

  get content () {
    return this.#content ??= settings.app.image
  }

  @repaint
  changeContent (content) {
    this.#content = content
    return this
  }
}

export default Image
