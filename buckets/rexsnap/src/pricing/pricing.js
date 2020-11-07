import { paint } from '@rex/h'
import * as f from '@rex/f'
import jsonld from '@rex/jsonld'
import markup from '@rex/markup'
import component from './component'
import schema from './schema.json'
import webpage from './webpage'

const currency = f.magic('currency')
const price = f.magic('price')
const setData = f.magic('setData')
const type = f.magic('type')

@paint(component)
@jsonld(webpage)
@markup
class Pricing {
  get data () {
    return this[setData](schema)
  }

  get description () {
    return 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos'
  }

  get title () {
    return 'Pricing • Create and share your photo stories'
  }

  get url () {
    return location.href
  }

  [currency] (value) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  [price] (active = 'month') {
    return active
  }

  [setData] (schema) {
    return f.map(schema, (el, index) => {
      return {
        ...el,
        type: this[type](index),
        price: this[currency](el.prices[this[price]()]),
        plan: this[price]()
      }
    })
  }

  [type] (index) {
    return index % 2 === 0 ? '' : 'inverse'
  }
}

export default Pricing
