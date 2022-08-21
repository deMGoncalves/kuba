import * as f from '@kuba/f'
import { after } from '@kuba/middleware'

const lock = after((output) => (
  f.frame(document.body.style = 'overflow: hidden;')(),
  output
))

const unlock = after((output) => (
  f.frame(document.body.removeAttribute('style'))(),
  output
))

export default {
  lock,
  unlock
}
