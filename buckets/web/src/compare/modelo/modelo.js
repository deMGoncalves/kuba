import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Modelo {
  get master () {
    return f.first(Compare.shelf).modelo
  }

  get slave () {
    return f.last(Compare.shelf).modelo
  }
}

export default Modelo
