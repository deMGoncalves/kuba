import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Title {
  #content = 'kuba';

  [component.content] () {
    return this.#content
  }

  @repaint
  [effect.onChange] (content) {
    this.#content = content
    return this
  }
}

export default Title
