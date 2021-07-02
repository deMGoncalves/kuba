import cookie from '@kuba/cookie'

export default new Headers({
  Authorization: cookie.getItem('access_token')
})
