import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Material {
  get master () {
    return f.first(Compare.shelf).laminas
  }

  get slave () {
    return f.last(Compare.shelf).laminas
  }
}

export default Material
