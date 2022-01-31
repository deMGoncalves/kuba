import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect, { onChange } from './effect'

@paint(component)
@effect
class Site {
  #valor

  get href () {
    return this.#valor
  }

  get valor () {
    return f
      .from(this.#valor)
      .pipe(f.or(f.__, ''))
      .pipe(f.replace(f.__, /https:\/\//, ''))
      .pipe(f.replace(f.__, /\//, ''))
      .done()
  }

  @repaint
  [onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Site
