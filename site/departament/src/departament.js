import { paint } from '@kuba/h'
import { params } from '@kuba/router'
import component from './component'
import schema from './schema.json'

@paint(component)
class Departament {
  static get title () {
    return schema.departaments[params.departament]
  }
}

export default Departament
