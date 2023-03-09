import { willMount, paint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'
import supabase from '@kuba/supabase'

@paint(component)
class Auth {
  @willMount
  logOut () {
    supabase
      .auth
      .signOut()
      .then(() => location.assign(urlFor('logIn')))
    return this
  }
}

export default Auth
