import * as f from '@kuba/f'
import { after } from '@kuba/middleware'

const addStyle = f.frame(() => (
  document.body.style = 'overflow: hidden;'
))

const removeStyle = f.frame(() => (
  document.body.removeAttribute('style')
))

const lock = after((output) => (
  addStyle(),
  output
))

const unlock = after((output) => (
  removeStyle(),
  output
))

export default {
  lock,
  unlock
}
