import * as f from '@kuba/f'

const dolar = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency'
})

f.assign(dolar, {
  is: f.equal('USD')
})

export default dolar
