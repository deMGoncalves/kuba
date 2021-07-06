import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import activateAndRedirect from './activateAndRedirect'
import component from './component'
import data from './data'
import signin from './signin'

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

  async signin (user) {
    const { data } = await signin(user)
    activateAndRedirect(data)
    return this
  }
}

export default Auth
