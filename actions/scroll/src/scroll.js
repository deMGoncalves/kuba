import { after } from '@kuba/middleware'

const lock = after((output) => (
  (document.body.style = 'overflow: hidden;'),
  output
))

const unlock = after((output) => (
  document.body.removeAttribute('style'),
  output
))

export default {
  lock,
  unlock
}
