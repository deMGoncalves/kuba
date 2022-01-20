import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'
import getMarca from './getMarca'

@paint(component)
@jsonld(data)
@markup
class Marca {
  get description () {
    return settings.app.description
  }

  get title () {
    return settings.app.name
  }

  @didMount
  async mount () {
    const { data: marca, error } = await getMarca()
    f.not(error) && setGlobal({ marca })
    return this
  }
}

export default Marca
