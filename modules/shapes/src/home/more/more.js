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
    return this.#content ??= More.active
  }

  get visible () {
    return this.#visible ??= f.F()
  }

  static get active () {
    return i18n.content
  }

  static get disable () {
    return '• • •'
  }

  @repaint
  @action.next
  next () {
    this.#content = More.disable
    return this
  }

  @repaint
  [effect.onChange] (shapes, page) {
    this.#content = More.active
    this.#visible = f.equal(f.multiply(page, 24), f.len(shapes))
    return this
  }
}

export default More
