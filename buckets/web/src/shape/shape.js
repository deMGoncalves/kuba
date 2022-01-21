import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { setGlobal } from '@kuba/global'
import markup from '@kuba/markup'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'
import getShape from './getShape'

@paint(component)
@jsonld(data)
@markup
class Shape {
  get description () {
    return settings.app.description
  }

  get title () {
    return settings.app.name
  }

  @didMount
  async mount () {
    const { data: shape, error } = await getShape()
    f.not(error) && setGlobal({ shape })
    return this
  }
}

export default Shape
