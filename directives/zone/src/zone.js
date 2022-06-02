import * as f from '@kuba/f'
import { didMount, paint, repaint } from '@kuba/h'
import component from './component'
import onScreen from '@kuba/onscreen'
import props from '@kuba/props'

@paint(component)
@props
class Zone {
  #onView

  get element () {
    return f.first(this[f.magic('tag')].children).element
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
