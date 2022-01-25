import { paint, repaint } from '@kuba/h'
import * as settings from '@kuba/settings'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Description {
  #content

  get content () {
    return this.#content ??= settings.app.description
  }

  @repaint
  changeContent (content) {
    this.#content = content
    return this
  }
}

export default Description
