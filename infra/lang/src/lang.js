import * as f from '@kuba/f'
import changeTo from './changeTo'
import evaluate from './evaluate'
import getValues from './getValues'
import mapper from './mapper'

class Lang {
  static #value

  static get value () {
    return Lang.#value ??= f
      .from(getValues())
      .pipe(f.find(f.__, evaluate))
      .pipe(mapper)
      .done()
  }

  static changeTo (value) {
    changeTo(Lang.#value = value)
    return this
  }
}

export default Lang
