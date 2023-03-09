import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Description {
  #content = 'Simples, pequeno e imperfeito. Uma visão além da programação.';

  [component.content] () {
    return this.#content
  }

  @repaint
  [effect.onChange] (content) {
    this.#content = content
    return this
  }
}

export default Description
