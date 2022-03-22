import * as settings from '@kuba/settings'
import { paint } from '@kuba/h'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'
import kuba from './kuba.svg'
import kubaOnColor from './kuba_onColor.svg'
import props from '@kuba/props'
import symbol from './symbol.svg'
import symbolOnColor from './symbol_onColor.svg'

@paint(component)
@jsonld(data)
@props
class Logo {
  #onColor
  #symbol

  get href () {
    return settings.app.url
  }

  get name () {
    return settings.app.name
  }

  get url () {
    return this.#symbol
      ? this.#onColor ? symbolOnColor : symbol
      : this.#onColor ? kubaOnColor : kuba
  }

  constructor (props) {
    this.#onColor = props.onColor
    this.#symbol = props.symbol
  }
}

export default Logo
