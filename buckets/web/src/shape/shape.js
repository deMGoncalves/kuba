import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import getShape from './getShape'

@paint(component)
@jsonld(data)
class Shape {
  @didMount
  async mount () {
    const { data: shape, error } = await getShape()

    f.not(error) && (
      setTitle(shape.modelo),
      setDescription(shape.descricao),
      setGlobal({ shape })
    )

    return this
  }
}

export default Shape
