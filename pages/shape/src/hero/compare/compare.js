import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import actions from './actions'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Compare {
  #pristine
  #shape

  get pristine () {
    return this.#pristine ??= f.T()
  }

  @actions.add
  add () {
    const shapes = f
      .from(localStorage.getItem('_kuba.compare'))
      .pipe(f.or(f.__, '[]'))
      .pipe(JSON.parse)
      .pipe(f.slice(f.__, -2))
      .done()

    const contains = f
      .from(shapes)
      .pipe(f.find(f.__, f.compose(f.equal(this.#shape.id), f.prop('id'))))
      .done()

    f.not(contains) && (
      f.push(shapes, this.#shape),
      localStorage.setItem('_kuba.compare', JSON.stringify(shapes))
    )

    return this
  }

  @repaint
  [effect.onChange] (shape) {
    this.#pristine = f.F()
    this.#shape = shape
    return this
  }
}

export default Compare
