import { args } from '@kuba/router'
import cookie from '@kuba/cookie'
import hub from './hub'

const lang = {
  get value () {
    return (
      cookie.lang ||
      args.lang ||
      navigator.language ||
      hub.EN
    )
  },

  setValue (value) {
    cookie.lang = value
    return this
  }
}

export default lang
