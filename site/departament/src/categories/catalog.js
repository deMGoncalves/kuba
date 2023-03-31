import { params } from '@kuba/router'
import schema from './schema.json'

class Catalog {
  static get categoires () {
    return schema.departaments[params.departament]
  }
}

export default Catalog
