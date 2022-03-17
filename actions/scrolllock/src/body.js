const lock = () =>
  document.body.style = 'overflow: hidden;'

const unlock = () =>
  document.body.removeAttribute('style')

export default {
  lock,
  unlock
}
