import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import getShape from './getShape'
import Schema from './schema'

@paint(component)
class Shape {
  @didMount
  async mount () {
    const { data: shape, error } = await getShape()

    f.not(error) && (
      setTitle(shape.modelo),
      setDescription(shape.descricao),
      Schema.create(shape),
      setGlobal({ shape })
    )

    return this
  }
}

export default Shape
