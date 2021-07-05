import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Select from './select'
import component from './component'

@paint(component)
class Filter {
  #selects
  #payload

  get pristine () {
    return f
      .from(this.#payload)
      .pipe(f.values)
      .pipe(f.filter(f.__, f.compose(f.not, f.isEmpty)))
      .pipe(f.len)
      .pipe(f.not)
      .done()
  }

  get selects () {
    return this.#selects
  }

  constructor (props) {
    this.#payload = {}
    this.#selects = f.map(f.or(props.selects, []), Select.create(this))
  }

  @repaint
  change (select) {
    this.#payload[select.key] = select.value
    return this
  }

  @repaint
  rewind () {
    f.forEach(this.selects, (select) => select.rewind())
    this.#payload = {}
    return this
  }
}

export default Filter
