import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import onScreen from '@kuba/onscreen'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Zone {
  #onView

  get element () {
    return this[f.magic('tag')].element
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
