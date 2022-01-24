import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Helper {
  #text

  get text () {
    return this.#text ??= ''
  }

  constructor (props) {
    this.#text = props.text
  }
}

export default Helper
