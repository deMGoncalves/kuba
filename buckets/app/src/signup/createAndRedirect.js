import cookie from '@kuba/cookie'
import { urlFor } from '@kuba/router'

export default (data) =>
  data && (
    cookie.setItem('access_token', data.access_token),
    location.assign(urlFor('home'))
  )
