import { paint, repaint } from '@kuba/h'
import * as settings from '@kuba/settings'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Title {
  #textContent

  get textContent () {
    return this.#textContent ??= settings.app.title
  }

  @repaint
  changeTextContent (textContent) {
    this.#textContent = textContent
    return this
  }
}

export default Title
