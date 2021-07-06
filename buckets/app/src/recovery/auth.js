import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import { urlFor } from '@kuba/router'
import component from './component'
import data from './data'
import recovery from './recovery'

@paint(component)
@jsonld(data)
@markup
class Auth {
  get description () {
    return __settings.app.description
  }

  get title () {
    return __settings.app.title
  }

  async recovery (user) {
    await recovery(user)
    location.assign(urlFor('signin'))
    return this
  }
}

export default Auth
