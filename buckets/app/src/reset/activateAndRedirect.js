import cookie from '@kuba/cookie'
import { urlFor } from '@kuba/router'
import token from './token'

export default (data) =>
  data && (
    cookie.setItem('access_token', token),
    location.assign(urlFor('home'))
  )
