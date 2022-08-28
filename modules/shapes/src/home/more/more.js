import * as f from '@kuba/f'
import * as action from './action'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'
import i18n from './i18n'

@paint(component)
@effect
class More {
  #text
  #visible

  get text () {
    return this.#text ??= i18n.active
  }

  @repaint
  @action.next
  onClick () {
    this.#text = i18n.disable
    return this
  }

  [component.visible] () {
    return this.#visible ??= f.F()
  }

  @repaint
  [effect.onChange] (shapes, page) {
    this.#text = i18n.active
    this.#visible = f.equal(f.multiply(page, 24), f.len(shapes))
    return this
  }
}

export default More
