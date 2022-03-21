import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'

@paint(component)
class Flares {
  #selected

  get selected () {
    return this.#selected ??= f.F()
  }

  @repaint
  toggle () {
    echo.emit('filter:change', {
      key: 'flares',
      value: this.#selected = f.not(this.selected)
    })
    return this
  }
}

export default Flares
