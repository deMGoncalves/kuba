import interceptor from '@kuba/interceptor'
import magic from '@kuba/magic'
import supabase from '@kuba/supabase'

const { onAuthenticated, onInvalid } = magic

const authenticate = interceptor(function (args, next) {
  setImmediate(() => {
    const { email, password } = this
    supabase
      .auth
      .signInWithPassword({ email, password })
      .then(({ data, error }) => (
        error
          ? this[onInvalid]?.(error)
          : this[onAuthenticated]?.(data)
      ))
  })
  return next(...args)
})

export default {
  authenticate,
  onAuthenticated,
  onInvalid
}
