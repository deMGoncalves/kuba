import * as f from '@kuba/f'

const dolar = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency'
})

f.assign(dolar, {
  is: f.equal('en-US')
})

export default dolar
