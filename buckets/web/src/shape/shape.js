import { paint } from '@kuba/h'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import { params, redirectTo } from '@kuba/router'
import component from './component'
import setData from './setData'
import storage from './storage'

@paint(component)
@storage
class Shape {
  [storage.onError] () {
    redirectTo('marca', { marca: params.marca })
    return this
  }

  [storage.onResponse] (shape) {
    setTitle(shape.modelo)
    setDescription(shape.descricao)
    setData(shape)
    setGlobal({ shape })
    return this
  }
}

export default Shape
