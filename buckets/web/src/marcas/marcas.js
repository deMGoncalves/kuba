import { didMount, paint } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import { setGlobal } from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'
import getMarcas from './getMarcas'
import schema from './schema.json'

@paint(component)
@jsonld(data)
@markup
class Marcas {
  #breadcrumb

  get breadcrumb () {
    return this.#breadcrumb ??= Breadcrumb.create(schema.breadcrumb)
  }

  get description () {
    return settings.app.description
  }

  get title () {
    return 'Marcas'
  }

  @didMount
  async mount () {
    const { data: marcas } = await getMarcas()
    setGlobal({ marcas })
    return this
  }
}

export default Marcas
