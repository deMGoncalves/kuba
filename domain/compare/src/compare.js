import * as f from '@kuba/f'
import actions from './actions'

class Compare {
  get shelf () {
    return f
      .from(localStorage.getItem(Compare.name))
      .pipe(f.or(f.__, '[]'))
      .pipe(JSON.parse)
      .done()
  }

  static get name () {
    return 'compare'
  }

  @actions.add
  add (shape) {
    const contains = f.find(this.shelf, f.compose(f.equal(shape.id), f.prop('id')))
    const shelf = this.shelf

    f.not(contains) && (
      f.push(shelf, shape),
      localStorage.setItem(Compare.name, JSON.stringify(shelf))
    )

    return this
  }

  @actions.remove
  remove (shape) {
    const shelf = f.filter(this.shelf, f.compose(f.different(shape.id), f.prop('id')))
    localStorage.setItem(Compare.name, JSON.stringify(shelf))
    return this
  }
}

export default Compare
