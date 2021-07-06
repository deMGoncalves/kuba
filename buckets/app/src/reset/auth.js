import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import activateAndRedirect from './activateAndRedirect'
import component from './component'
import data from './data'
import reset from './reset'

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

  async reset (user) {
    const { data } = await reset(user)
    activateAndRedirect(data)
    return this
  }
}

export default Auth
