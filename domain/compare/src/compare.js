import * as f from '@kuba/f'
import actions from './actions'

class Compare {
  static get name () {
    return 'compare'
  }

  static get shelf () {
    return f
      .from(localStorage.getItem(Compare.name))
      .pipe(f.or(f.__, '[]'))
      .pipe(JSON.parse)
      .done()
  }

  @actions.add
  add (shape) {
    const contains = f.find(Compare.shelf, f.compose(f.equal(shape.id), f.prop('id')))
    const shelf = Compare.shelf

    f.not(contains) && (
      f.push(shelf, shape),
      localStorage.setItem(Compare.name, JSON.stringify(shelf))
    )

    return this
  }

  @actions.remove
  static remove (shape) {
    const shelf = f.filter(Compare.shelf, f.compose(f.different(shape.id), f.prop('id')))
    localStorage.setItem(Compare.name, JSON.stringify(shelf))
    return this
  }
}

export default Compare
