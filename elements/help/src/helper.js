import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Helper {
  #className
  #text

  get className () {
    return this.#className ??= ''
  }

  get text () {
    return this.#text ??= ''
  }

  constructor (props) {
    this.#text = props.text
    this.#className = props.className
  }
}

export default Helper
