import { paint, repaint } from '@kuba/h'
import component from './component'

@paint(component)
class More {
  #content

  get content () {
    return this.#content ??= 'Ver mais'
  }

  @repaint
  onClick () {
    this.#content = '• • •'
    return this
  }
}

export default More
