import { urlFor } from '@kuba/router'
import interceptor from '@kuba/interceptor'
import magic from '@kuba/magic'
import supabase from '@kuba/supabase'

const { onError, onPasswordReset } = magic

const resetPassword = interceptor(function (args, next) {
  setImmediate(() => {
    const { email } = this
    const redirectTo = urlFor('setNewPassword')
    supabase
      .auth
      .resetPasswordForEmail(email, { redirectTo })
      .then(({ data, error }) => (
        error
          ? this[onError]?.(error)
          : this[onPasswordReset]?.(data)
      ))
  })
  return next(...args)
})

export default {
  resetPassword,
  onPasswordReset,
  onError
}
