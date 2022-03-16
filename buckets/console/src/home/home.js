import { paint, repaint } from '@kuba/h'
import component from './component'
import events from './events'

@paint(component)
@events
class Home {
  #target

  get target () {
    return this.#target ??= ''
  }

  @repaint
  [events.onEvent] () {
    this.#target = new Home()
    return this
  }
}

export default Home
