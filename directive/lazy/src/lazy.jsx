import h, { paint, repaint } from '@kuba/h'
import component from './component'
import request from './request'

@paint(component)
@request
class Lazy {
  #ast
  #importer

  constructor (props) {
    this.#importer = props['data-importer']
  }

  [component.ast] () {
    return this.#ast
  }

  [request.importer] () {
    return this.#importer()
  }

  @repaint
  [request.render] (ast) {
    this.#ast = ast
    return this
  }

  static create (functionRef) {
    return () => (
      <Lazy data-importer={functionRef} />
    )
  }
}

export default Lazy.create
