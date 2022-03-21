import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'
import Tag from './tag'

@paint(component)
@effect
class Tags {
  #filter = {}

  get filters () {
    return f
      .from(this.#filter)
      .pipe(f.entries)
      .pipe(f.filter(f.__, ([_, values]) => f.is(Array, values)))
      .pipe(f.map(f.__, ([key, values]) => f.map(values, (value) => [key, value])))
      .pipe((target) => f.flatten(target, 1))
      .pipe(f.map(f.__, Tag.create))
      .done()
  }

  get len () {
    return f.len(this.filters)
  }

  @repaint
  [effect.onChange] (key, value) {
    f.assign(this.#filter, { [key]: value })
    return this
  }
}

export default Tags
