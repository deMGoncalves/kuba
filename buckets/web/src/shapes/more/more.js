import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import * as action from './action'
import component from './component'
import effect from './effect'

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
    return 'Ver mais'
  }

  static get disable () {
    return '• • •'
  }

  @repaint
  @action.more
  onClick () {
    this.#content = More.disable
    return this
  }

  @repaint
  [effect.onChange] (shapes) {
    this.#content = More.active
    this.#visible = f.not(f.mod(f.len(shapes), 2))
    return this
  }
}

export default More
