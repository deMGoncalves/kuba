import { paint } from '@kuba/h'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import { params, redirectTo } from '@kuba/router'
import component from './component'
import Schema from './schema'
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
    Schema.create(shape)
    setGlobal({ shape })
    return this
  }
}

export default Shape
