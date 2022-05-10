import * as f from '@kuba/f'
import changeTo from './changeTo'
import evaluate from './evaluate'
import getValues from './getValues'

export default {
  get value () {
    return f.find(getValues(), evaluate)
  },

  changeTo (value) {
    changeTo(value)
    return this
  }
}
