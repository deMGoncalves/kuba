import { paint, repaint } from '@kuba/h'
import schedule from '@kuba/schedule'
import category from './category'
import component from './component'
import fallback from './fallback'
import segment from './segment'
import search from './search'
import universe from './universe'

@paint(component)
@schedule(search, universe, category, segment, fallback)
class Shelf {
  #category
  #className
  #feeds
  #query
  #segment
  #universe

  get category () {
    return this.#category
  }

  get className () {
    return this.#className
  }

  get feeds () {
    return this.#feeds ??= []
  }

  get query () {
    return this.#query
  }

  get segment () {
    return this.#segment
  }

  get universe () {
    return this.#universe
  }

  constructor (props) {
    this.#category = props.category
    this.#className = props.className
    this.#query = props.query
    this.#segment = props.segment
    this.#universe = props.universe
  }

  @repaint
  change (feeds) {
    this.#feeds = feeds
    return this
  }
}

export default Shelf
