import { paint, repaint } from '@rex/h'
import * as f from '@rex/f'
import ldjson from '@rex/ldjson'
import markup from '@rex/markup'
import * as structured from '@structured'
import component from './component'
import schema from './schema.json'

const currency = f.magic('currency')
const setData = f.magic('setData')
const type = f.magic('type')

@paint(component)
@ldjson(structured.webpage)
@markup
class Pricing {
  #data
  #price

  get data () {
    return this.#data
  }

  get description () {
    return 'Cando no meu melhor'
  }

  get title () {
    return 'Kuba'
  }

  get url () {
    return location.href
  }

  constructor () {
    this.#price = 'month'
    this.#data = this[setData]('month')
  }

  [currency] (value) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  [setData] (price) {
    return f.map(schema, (el) => {
      return {
        ...el,
        type: this.#price,
        price: this[currency](el.prices[price])
      }
    })
  }

  @repaint
  checked (event) {
    this[setData](event.checked ? 'month' : 'year')
    return this
  }

  [type] (index) {
    return index % 2 === 0 ? '' : 'inverse'
  }
}

export default Pricing
