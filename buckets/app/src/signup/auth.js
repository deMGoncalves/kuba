import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import createAndRedirect from './createAndRedirect'
import component from './component'
import data from './data'
import signup from './signup'

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

  async signup (user) {
    const { data } = await signup(user)
    createAndRedirect(data)
    return this
  }
}

export default Auth
