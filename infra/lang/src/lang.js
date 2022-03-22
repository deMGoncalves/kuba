import changeTo from './changeTo'
import getValue from './getValue'

export default {
  get value () {
    return getValue()
  },

  changeTo (value) {
    changeTo(value)
    return this
  }
}
