import * as f from '@kuba/f'
import * as action from './action'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'
import i18n from './i18n'

@paint(component)
@effect
class More {
  #content
  #visible

  get content () {
    return this.#content ??= i18n.active
  }

  get visible () {
    return this.#visible ??= f.F()
  }

  @repaint
  @action.next
  next () {
    this.#content = i18n.disable
    return this
  }

  @repaint
  [effect.onChange] (shapes, page) {
    this.#content = i18n.active
    this.#visible = f.equal(f.multiply(page, 24), f.len(shapes))
    return this
  }
}

export default More
