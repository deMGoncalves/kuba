import h, { paint, repaint } from '@kuba/h'
import component from './component'
import request from './request'

@paint(component)
@request
class Lazy {
  #ast
  #import

  get ast () {
    return this.#ast
  }

  constructor (props) {
    this.#import = props.import
  }

  [request.import] () {
    return this.#import()
    return this
  }

  @repaint
  [request.render] (ast) {
    this.#ast = ast
    return this
  }

  static create (functionRef) {
    return () => (
      <Lazy import={functionRef} />
    )
  }
}

export default Lazy.create
