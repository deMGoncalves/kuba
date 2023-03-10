import cookie from '@kuba/cookie'
import interceptor from '@kuba/interceptor'

const setUser = interceptor(function (args, next) {
  const [{ session, user }] = args
  cookie.access_token = session.access_token
  cookie.name = user.app_metadata.name
  return next(...args)
})

export default {
  setUser
}
