import * as filter from '@kuba/filter'
import { paint, repaint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'
import user from './user'

@paint(component)
class Auth {
  #email
  #name
  #password
  #state

  get email () {
    return (this.#email ??= '')
  }

  get name () {
    return (this.#name ??= '')
  }

  get password () {
    return (this.#password ??= '')
  }

  get state () {
    return (this.#state ??= '')
  }

  @filter.prevent
  @filter.formData
  @user.create
  signUp (data) {
    this.#email = data.email
    this.#name = data.name
    this.#password = data.password
    return this
  }

  [user.onCreated] (_user) {
    location.assign(urlFor('login'))
    return this
  }

  @repaint
  [user.onInvalid] () {
    this.#state = 'invalid'
    return this
  }
}

export default Auth
