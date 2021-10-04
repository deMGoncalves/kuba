import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import onScreen from '@kuba/onscreen'
import component from './component'

@paint(component)
class Zone {
  #onView

  get element () {
    return this[f.magic('tag')].children.list[0].element
  }

  get onView () {
    return this.#onView ??= f.F()
  }

  @repaint
  render () {
    this.#onView = f.T()
    return this
  }

  @didMount
  scroll () {
    onScreen(this.element, () => this.render())
    return this
  }
}

export default Zone
