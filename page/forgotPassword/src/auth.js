import * as filter from '@kuba/filter'
import { paint, repaint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'
import user from './user'

@paint(component)
class Auth {
  #email
  #state

  get email () {
    return (this.#email ??= '')
  }

  get state () {
    return (this.#state ??= '')
  }

  @filter.prevent
  @filter.formData
  @user.resetPassword
  forgotPassword (data) {
    this.#email = data.email
    return this
  }

  @repaint
  [user.onError] () {
    this.#state = 'error'
    return this
  }

  [user.onPasswordReset] () {
    location.assign(urlFor('checkYourEmail'))
    return this
  }
}

export default Auth
