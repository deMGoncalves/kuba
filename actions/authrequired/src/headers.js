import cookie from '@kuba/cookie'

export default {
  Authorization: cookie.getItem('access_token')
}
