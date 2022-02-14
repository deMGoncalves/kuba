import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Site {
  #valor

  get content () {
    return f
      .from(this.href)
      .pipe(f.replace(f.__, /https?:\/\//, ''))
      .pipe(f.replace(f.__, /\/.*/, ''))
      .done()
  }

  get href () {
    return this.#valor ??= ''
  }

  @repaint
  [effect.onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Site
