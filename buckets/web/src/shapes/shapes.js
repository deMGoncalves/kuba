import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'
import getShapes from './getShapes'

@paint(component)
@jsonld(data)
class Shapes {
  @didMount
  async mount () {
    const { data: shapes, error } = await getShapes()
    f.not(error) && setGlobal({ shapes })
    return this
  }
}

export default Shapes
